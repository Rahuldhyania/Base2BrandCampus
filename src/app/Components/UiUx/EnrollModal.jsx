"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import { storeEnrollmentToken } from "@/lib/enrollment";
import mainbtnng from "../../../../public/images/mainbtnbg.webp";

const EnrollModal = ({ isOpen, onClose, onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const inputRefs = useRef([]);

  // Reset modal when closed
  useEffect(() => {
    if (!isOpen) {
      setEmail("");
      setShowOTP(false);
      setOtp(["", "", "", "", "", ""]);
      setError("");
    }
  }, [isOpen]);

  // Focus first OTP input when OTP view appears
  useEffect(() => {
    if (showOTP && inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, [showOTP]);

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address");
      setError("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/enroll/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("OTP sent successfully to your email!");
        setShowOTP(true);
        setError("");
      } else {
        const errorMsg = data.error || "Failed to send OTP. Please try again.";
        toast.error(errorMsg);
        setError(errorMsg);
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      const errorMsg = "Network error. Please check your connection and try again.";
      toast.error(errorMsg);
      setError(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOTPChange = (index, value) => {
    // Only allow numbers
    if (value && !/^\d$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleOTPKeyDown = (index, e) => {
    // Handle backspace
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleOTPPaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    const pastedArray = pastedData.split("").filter((char) => /^\d$/.test(char));

    const newOtp = [...otp];
    pastedArray.forEach((digit, index) => {
      if (index < 6) {
        newOtp[index] = digit;
      }
    });
    setOtp(newOtp);

    // Focus next empty input or last input
    const nextIndex = Math.min(pastedArray.length, 5);
    inputRefs.current[nextIndex]?.focus();
  };

  const handleOTPSubmit = async (e) => {
    e.preventDefault();
    const otpValue = otp.join("");
    if (otpValue.length !== 6 || !/^\d{6}$/.test(otpValue)) {
      toast.error("Please enter the complete 6-digit OTP");
      setError("Please enter the complete 6-digit OTP");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/enroll/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, otp: otpValue }),
      });

      const data = await response.json();

      if (data.success) {
        // Store enrollment token for future use
        const accessToken = data.data?.accessToken;
        const userId = data.data?.user?.id;
        
        if (accessToken) {
          storeEnrollmentToken(accessToken);
        }

        // Call enrollment/login API
        try {
          const enrollResponse = await fetch("/api/enroll/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: email,
              userId: userId,
              accessToken: accessToken,
            }),
          });

          const enrollData = await enrollResponse.json();

          if (enrollData.success) {
            toast.success("Enrollment completed successfully! You are now logged in.");
            setError("");
            
            // Call onLoginSuccess callback if provided (e.g., to play video)
            if (onLoginSuccess) {
              onLoginSuccess();
            }
            
            // Close modal after success
            setTimeout(() => {
              onClose();
              // Only reload if no callback is provided (for video playback, we don't want to reload)
              if (!onLoginSuccess) {
                window.location.reload();
              }
            }, 1500);
          } else {
            // OTP verified but enrollment failed
            toast.warning(enrollData.error || "OTP verified but enrollment failed. Please try again.");
            setError(enrollData.error || "Enrollment failed");
          }
        } catch (enrollError) {
          console.error("Enrollment API error:", enrollError);
          // OTP verified but enrollment API call failed
          toast.warning("OTP verified but enrollment failed. Please try again.");
          setError("Enrollment failed. Please contact support.");
        }
      } else {
        let errorMsg = data.error || "Invalid OTP. Please try again.";
        
        // Handle specific error codes
        if (data.code === 'otp_expired') {
          errorMsg = "OTP has expired. Please request a new code.";
          // Optionally auto-switch back to email step
          setTimeout(() => {
            setShowOTP(false);
            setOtp(["", "", "", "", "", ""]);
          }, 2000);
        } else if (data.code === 'invalid_token') {
          errorMsg = "Invalid OTP code. Please check and try again.";
        }
        
        toast.error(errorMsg);
        setError(errorMsg);
        // Clear OTP fields on error
        setOtp(["", "", "", "", "", ""]);
        if (inputRefs.current[0]) {
          inputRefs.current[0].focus();
        }
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      const errorMsg = "Network error. Please check your connection and try again.";
      toast.error(errorMsg);
      setError(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToEmail = () => {
    setShowOTP(false);
    setOtp(["", "", "", "", "", ""]);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 p-6 md:p-8 z-50"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold transition-colors"
          >
            ×
          </button>

          {/* Email Step */}
          {!showOTP && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#5D38DE] mb-2">
                Enroll Now
              </h2>
              <p className="text-gray-600 mb-6">
                Enter your email to continue with enrollment
              </p>

              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 bg-purple-50 focus:outline-none focus:border-[#5D38DE] focus:ring-2 focus:ring-purple-200 transition-all"
                    required
                    autoFocus
                    disabled={isLoading}
                  />
                  {error && !showOTP && (
                    <div className="text-red-600 text-sm mt-2">{error}</div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full text-white py-3 px-6 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${mainbtnng.src})`,
                  }}
                >
                  {isLoading ? "Sending OTP..." : "Continue"}
                </button>
              </form>
            </motion.div>
          )}

          {/* OTP Step */}
          {showOTP && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <button
                onClick={handleBackToEmail}
                className="text-[#5D38DE] hover:text-[#4a2fd1] mb-4 flex items-center gap-2 transition-colors"
              >
                <span>←</span> Back to Email
              </button>

              <h2 className="text-2xl md:text-3xl font-bold text-[#5D38DE] mb-2">
                Verify OTP
              </h2>
              <p className="text-gray-600 mb-2">
                We've sent a 6-digit code to
              </p>
              <p className="text-gray-800 font-semibold mb-6">{email}</p>

              <form onSubmit={handleOTPSubmit} className="space-y-6">
                <div className="flex justify-center gap-2 md:gap-3">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => (inputRefs.current[index] = el)}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOTPChange(index, e.target.value)}
                      onKeyDown={(e) => handleOTPKeyDown(index, e)}
                      onPaste={handleOTPPaste}
                      className="w-12 h-12 md:w-14 md:h-14 text-center text-xl md:text-2xl font-bold border-2 border-gray-300 rounded-xl bg-purple-50 focus:outline-none focus:border-[#5D38DE] focus:ring-2 focus:ring-purple-200 transition-all"
                    />
                  ))}
                </div>

                {error && (
                  <div className="text-center text-red-600 text-sm bg-red-50 py-2 px-4 rounded-lg">
                    {error}
                  </div>
                )}

                <div className="text-center">
                  <button
                    type="button"
                    onClick={async () => {
                      if (!email) return;
                      
                      setIsLoading(true);
                      setError("");
                      
                      try {
                        const response = await fetch("/api/enroll/send-otp", {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify({ email }),
                        });

                        const data = await response.json();

                        if (data.success) {
                          toast.success("OTP resent successfully!");
                          setOtp(["", "", "", "", "", ""]);
                          if (inputRefs.current[0]) {
                            inputRefs.current[0].focus();
                          }
                        } else {
                          toast.error(data.error || "Failed to resend OTP");
                          setError(data.error || "Failed to resend OTP");
                        }
                      } catch (error) {
                        console.error("Error resending OTP:", error);
                        toast.error("Failed to resend OTP. Please try again.");
                        setError("Failed to resend OTP");
                      } finally {
                        setIsLoading(false);
                      }
                    }}
                    disabled={isLoading}
                    className="text-[#5D38DE] hover:text-[#4a2fd1] text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Didn't receive code? Resend
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={isLoading || otp.join("").length !== 6}
                  className="w-full text-white py-3 px-6 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${mainbtnng.src})`,
                  }}
                >
                  {isLoading ? "Verifying..." : "Verify OTP"}
                </button>
              </form>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default EnrollModal;

