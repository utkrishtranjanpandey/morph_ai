import React, { useState } from "react";

export default function N8nUpload() {
  const [file, setFile] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const webhookUrl = "https://tejasgu.app.n8n.cloud/webhook-test/mini1";

  async function sendToN8n() {
    if (!file) return alert("Please choose a file first");

    const form = new FormData();
    form.append("file", file, file.name);

    try {
      setIsSending(true);
      const res = await fetch(webhookUrl, { method: "POST", body: form });
      alert(res.ok ? "✅ File sent successfully!" : "❌ Failed to send file.");
    } catch (err) {
      alert("⚠ Error sending file to n8n");
      console.error(err);
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section id="n8n" className="n8n-section">
      <h2 className="section-title">Send Image to n8n</h2>

      <div className="upload-box">
        <label htmlFor="file-upload" className="upload-label">
          {file ? (
            <span className="file-name">📁 {file.name}</span>
          ) : (
            "Click to choose a file"
          )}
        </label>
        <input
          id="file-upload"
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          style={{ display: "none" }}
        />

        <button className="btn upload-btn" onClick={sendToN8n} disabled={isSending}>
          {isSending ? "Uploading..." : "Send to n8n"}
        </button>
      </div>
    </section>
  );
}
