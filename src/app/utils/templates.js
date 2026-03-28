function getTimestamp() {
  return new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })
}

function getFreelancerTemplate(formData) {
  const { name,
    email,
    mobile,
    projectDetails,
    message } = formData;
  const ts = getTimestamp();
  return `
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="font-family:Helvetica Neue,Helvetica,Arial,sans-serif">
    <tr><td style="background:#1A1A18;border-radius:16px 16px 0 0;padding:28px 36px;text-align:center">
      <div style="display:inline-block;background:#2563EB;color:#fff;font-size:10px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;padding:5px 14px;border-radius:100px;margin-bottom:14px">New Project Inquiry</div>
      <br>
      <span style="font-family:Georgia,serif;font-size:26px;font-weight:700;color:#fff">Srinidhi<span style="color:#2563EB"> </span>Anand</span>
      <p style="margin:6px 0 0;font-size:11px;color:#9A9A92;letter-spacing:0.06em">FREELANCE PORTFOLIO · CONTACT FORM</p>
    </td></tr>
    <tr><td style="background:#2563EB;padding:14px 36px">
      <table width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr><td><p style="margin:0;font-size:13px;color:#BFDBFE">Someone wants to work with you 🎉</p></td>
        <td align="right"><p style="margin:0;font-size:11px;color:#93C5FD;font-family:'Courier New',monospace">${ts}</p></td></tr>
      </table>
    </td></tr>
    <tr><td style="background:#fff;padding:36px">
      <p style="margin:0 0 14px;font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#9CA3AF">Sender Details</p>
      <div style="background:#F8F9FF;border-radius:12px;padding:22px;border-left:4px solid #2563EB;margin-bottom:28px">
        <p style="margin:0 0 3px;font-size:10px;color:#9CA3AF;text-transform:uppercase;letter-spacing:0.08em">Full Name</p>
        <p style="margin:0 0 16px;font-size:16px;font-weight:700;color:#1A1A18">${name}</p>
        <p style="margin:0 0 3px;font-size:10px;color:#9CA3AF;text-transform:uppercase;letter-spacing:0.08em">Email Address</p>
        <p style="margin:0 0 16px;font-size:14px;color:#2563EB">${email}</p>
        <p style="margin:0 0 3px;font-size:10px;color:#9CA3AF;text-transform:uppercase;letter-spacing:0.08em">Mobile Number</p>
        <p style="margin:0;font-size:14px;color:#1A1A18">${mobile}</p>
      </div>
      <p style="margin:0 0 14px;font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#9CA3AF">Project Details</p>
      <div style="background:#F8F9FF;border-radius:10px;padding:16px 20px;margin-bottom:28px">
        <p style="margin:0 0 3px;font-size:10px;color:#9CA3AF;text-transform:uppercase;letter-spacing:0.08em">Project Details</p>
        <p style="margin:0;font-size:14px;font-weight:600;color:#1A1A18">${projectDetails}</p>
      </div>
      <p style="margin:0 0 12px;font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#9CA3AF">Message</p>
      <div style="background:#FAFAF7;border-radius:12px;padding:22px;border:1px solid #E5E5DF;margin-bottom:28px">
        <p style="margin:0;font-size:14px;color:#374151;line-height:1.75">${message}</p>
      </div>
      <p style="margin:0 0 14px;font-size:13px;color:#6B7280;text-align:center">Reply directly to this inquiry</p>
      <table width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td width="96%" style="padding-right:8px">
            <a href="mailto:${email}" style="display:block;background:#2563EB;color:#fff;text-decoration:none;font-size:13px;font-weight:600;padding:13px;border-radius:10px;text-align:center">Reply via Email</a>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>`
}

function getSeniorTemplate(formData) {
  const {
    name,
    company,
    email,
    mobile,
    role,
    message
  } = formData;
  const ts = getTimestamp();
  return `
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="font-family:Helvetica Neue,Helvetica,Arial,sans-serif;background:#13131A">
    <tr><td style="background:#13131A;border-radius:16px 16px 0 0;padding:28px 36px;border-bottom:1px solid #2A2A38">
      <table width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
        <td>
          <p style="margin:0 0 8px;font-family:'Courier New',monospace;font-size:11px;color:#7C6AF7;letter-spacing:0.08em">New Job opportunity Received</p>
          <p style="margin:0;font-family:'Courier New',monospace;font-size:20px;font-weight:700;color:#F0F0F8"><span style="color:#7C6AF7">Srinidhi A</span></p>
          <p style="margin:4px 0 0;font-size:11px;color:#8888A0;letter-spacing:0.06em;text-transform:uppercase">Senior Engineer · R&D Portfolio</p>
        </td>
        <td align="right" valign="middle">
          <div style="background:#1A1A24;border:1px solid #2A2A38;border-radius:8px;padding:10px 14px;text-align:center">
            <p style="margin:0 0 2px;font-size:9px;color:#8888A0;text-transform:uppercase;letter-spacing:0.08em">Received</p>
            <p style="margin:0;font-family:'Courier New',monospace;font-size:12px;color:#2DD4BF">${ts}</p>
          </div>
        </td>
      </tr></table>
    </td></tr>
    <tr><td style="background:linear-gradient(90deg,#7C6AF7 0%,#2DD4BF 100%);padding:2px 0"></td></tr>
    <tr><td style="background:#13131A;padding:32px 36px">
      <div style="background:#1A1A24;border:1px solid #2A2A38;border-radius:10px;padding:16px 18px;margin-bottom:26px">
        <p style="margin:0;font-size:13px;color:#B0B0C8;line-height:1.5">📨 You have a new message from <strong style="color:#F0F0F8">${name}</strong> via your Senior / R&D portfolio.</p>
      </div>
      <p style="margin:0 0 10px;font-family:'Courier New',monospace;font-size:10px;color:#7C6AF7;letter-spacing:0.1em">CONTACT_INFO {</p>
      <div style="background:#1A1A24;border:1px solid #2A2A38;border-radius:0 12px 12px 12px;overflow:hidden;margin-bottom:26px">
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td style="padding:14px 18px;border-right:1px solid #2A2A38;border-bottom:1px solid #2A2A38;width:110px"><p style="margin:0;font-family:'Courier New',monospace;font-size:10px;color:#8888A0">name</p></td>
            <td style="padding:14px 18px;border-bottom:1px solid #2A2A38"><p style="margin:0;font-size:14px;font-weight:600;color:#F0F0F8">${name}</p></td>
          </tr>
          <tr>
            <td style="padding:14px 18px;border-right:1px solid #2A2A38;border-bottom:1px solid #2A2A38"><p style="margin:0;font-family:'Courier New',monospace;font-size:10px;color:#8888A0">email</p></td>
            <td style="padding:14px 18px;border-bottom:1px solid #2A2A38"><p style="margin:0;font-size:13px;color:#7C6AF7">${email}</p></td>
          </tr>
           <tr>
            <td style="padding:14px 18px;border-right:1px solid #2A2A38;border-bottom:1px solid #2A2A38"><p style="margin:0;font-family:'Courier New',monospace;font-size:10px;color:#8888A0">Contact</p></td>
            <td style="padding:14px 18px;border-bottom:1px solid #2A2A38"><p style="margin:0;font-size:13px;color:#7C6AF7">${mobile}</p></td>
          </tr>
          <tr>
            <td style="padding:14px 18px;border-right:1px solid #2A2A38;border-bottom:1px solid #2A2A38"><p style="margin:0;font-family:'Courier New',monospace;font-size:10px;color:#8888A0">company</p></td>
            <td style="padding:14px 18px;border-bottom:1px solid #2A2A38"><p style="margin:0;font-size:13px;color:#F0F0F8">${company}</p></td>
          </tr>
          <tr>
            <td style="padding:14px 18px;border-right:1px solid #2A2A38"><p style="margin:0;font-family:'Courier New',monospace;font-size:10px;color:#8888A0">opportunity</p></td>
            <td style="padding:14px 18px"><p style="margin:0;font-size:13px;color:#2DD4BF;font-weight:500">${role}</p></td>
          </tr>
        </table>
      </div>
      <p style="margin:0 0 10px;font-family:'Courier New',monospace;font-size:10px;color:#7C6AF7;letter-spacing:0.1em">MESSAGE {</p>
      <div style="background:#1A1A24;border-left:3px solid #7C6AF7;border-radius:0 10px 10px 0;padding:20px;margin-bottom:10px">
        <p style="margin:0;font-size:14px;color:#C0C0D8;line-height:1.8">${message}</p>
      </div>
      <p style="margin:0 0 18px;font-family:'Courier New',monospace;font-size:10px;color:#7C6AF7;letter-spacing:0.1em">}</p>
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:10px"><tr>
        <td style="padding-right:8px" width="96%">
          <a href="mailto:${email}" style="display:block;background:#7C6AF7;color:#fff;text-decoration:none;font-size:13px;font-weight:600;padding:13px;border-radius:10px;text-align:center">Reply via Email →</a>
        </td>
      </tr></table>
    </td></tr>
  </table>`
}

export { getFreelancerTemplate, getSeniorTemplate }