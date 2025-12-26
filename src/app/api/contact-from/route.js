export const runtime = "nodejs";      // Ensures this runs on the server
export const dynamic = "force-dynamic"; // Prevent static export

export async function POST(req) {
    const body = await req.json();
    const payload = new URLSearchParams(body).toString();

    try {
        const res = await fetch(
            "https://crm.base2brand.com/modules/Webforms/capture.php",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: payload,
            }
        );
        const text = await res.text();

        return new Response(JSON.stringify({ success: true, response: text }), {
            status: 200,
        });
    } catch (error) {
        return new Response(JSON.stringify({ success: false, error }), {
            status: 500,
        });
    }
}
// import { NextResponse } from "next/server";

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     console.log("API BODY 👉", body);

//     /* ========= VTIGER ========= */
//     const vtigerParams = new URLSearchParams();

//     vtigerParams.append(
//       "__vtrftk",
//       "sid:86d217288de8307d1159faec2cd8f20e6fd42759,1766745690"
//     );
//     vtigerParams.append("publicid", "b1d358f820e3c28e411b9058299241a5");
//     vtigerParams.append("urlencodeenable", "1");
//     vtigerParams.append("name", "b2bcampus");

//     vtigerParams.append("firstname", body.firstname);
//     vtigerParams.append("lastname", body.lastname);
//     vtigerParams.append("mobile", body.mobile);
//     vtigerParams.append("email", body.email);

//     /* 🔥 VTIGER COURSE FIX */
//     vtigerParams.append("cf_1192[]", body.cf_1192); 

//     vtigerParams.append("leadsource", "b2bcampus website");

//     fetch("https://crm.base2brand.com/modules/Webforms/capture.php", {
//       method: "POST",
//       body: vtigerParams,
//     }).catch(() => {});

//     /* ========= PABBLY ========= */
//     const pabblyParams = new URLSearchParams({
//       firstname: body.firstname,
//       lastname: body.lastname,
//       email: body.email,
//       mobile: body.mobile,
//       course: body.cf_1192,
//     });

//     fetch(
//       "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjcwNTZkMDYzMDA0MzY1MjY5NTUzNDUxMzIi_pc",
//       {
//         method: "POST",
//         body: pabblyParams,
//       }
//     ).catch(() => {});

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error("API ERROR:", error);
//     return NextResponse.json({ success: false }, { status: 500 });
//   }
// }


