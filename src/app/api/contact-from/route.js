// export const runtime = "nodejs";      // Ensures this runs on the server
// export const dynamic = "force-dynamic"; // Prevent static export

// export async function POST(req) {
//     const body = await req.json();
//     const payload = new URLSearchParams(body).toString();

//     try {
//         const res = await fetch(
//             "https://crm.base2brand.com/modules/Webforms/capture.php",
//             {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/x-www-form-urlencoded",
//                 },
//                 body: payload,
//             }
//         );
//         const text = await res.text();

//         return new Response(JSON.stringify({ success: true, response: text }), {
//             status: 200,
//         });
//     } catch (error) {
//         return new Response(JSON.stringify({ success: false, error }), {
//             status: 500,
//         });
//     }
// }
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const body = await req.json();

        /* ========= VTIGER (DON'T AWAIT) ========= */
        fetch("https://crm.base2brand.com/modules/Webforms/capture.php", {
            method: "POST",
            body: new URLSearchParams({
                __vtrftk:
                    "sid:86d217288de8307d1159faec2cd8f20e6fd42759,1766745690",
                publicid: "b1d358f820e3c28e411b9058299241a5",
                urlencodeenable: "1",
                name: "b2bcampus",
                firstname: body.firstname,
                lastname: body.lastname,
                mobile: body.mobile,
                email: body.email,
                cf_1192: body.course,
                leadsource: "b2bcampus website",
            }),
        }).catch(() => { }); // ignore errors

        /* ========= PABBLY (DON'T AWAIT) ========= */
        fetch(
            "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjcwNTZkMDYzMDA0MzY1MjY5NTUzNDUxMzIi_pc",
            {
                method: "POST",
                body: new URLSearchParams({
                    firstname: body.firstname,
                    lastname: body.lastname,
                    email: body.email,
                    mobile: body.mobile,
                    course: body.course,
                }),
            }
        ).catch(() => { });

        /* ========= INSTANT SUCCESS ========= */
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("API ERROR:", error);
        return NextResponse.json(
            { success: false },
            { status: 500 }
        );
    }
}

