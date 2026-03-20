import { useMemo, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import "./AdminMessagesPage.css";

export default function AdminMessagesPage() {
  const [selectedConversationId, setSelectedConversationId] = useState(1);
  const [message, setMessage] = useState("");

  const conversations = [
    {
      id: 1,
      title: "Black Backpack",
      date: "Feb 20",
      preview: "Can you describe any markings on the backpack?",
      status: ["Matched", "Pending"],
      messages: [
        { id: 1, text: "Can you describe any markings on the backpack?", time: "2:04 PM", isUser: false },
        { id: 2, text: "Yes, it is black with a red zipper and a school logo on the front pocket.", time: "2:17 PM", isUser: true },
      ],
    },
    {
      id: 2,
      title: "Laptop Charger",
      date: "Feb 14",
      preview: "Provide a description of your charger.",
      status: ["Pending"],
      messages: [{ id: 1, text: "Please describe the charger brand and cable type.", time: "1:10 PM", isUser: false }],
    },
    {
      id: 3,
      title: "Set of Keys",
      date: "Feb 10",
      preview: "Please provide details so we can verify ownership.",
      status: ["Matched"],
      messages: [{ id: 1, text: "Do the keys have any keychains or tags attached?", time: "11:22 AM", isUser: false }],
    },
    {
      id: 4,
      title: "Water Bottle",
      date: "Feb 9",
      preview: "Provide a description of the bottle.",
      status: ["Resolved"],
      messages: [{ id: 1, text: "Your item has been confirmed and marked as resolved.", time: "9:05 AM", isUser: false }],
    },
  ];

  const selectedConversation = useMemo(
    () => conversations.find((c) => c.id === selectedConversationId) || conversations[0],
    [selectedConversationId]
  );

  const handleSend = () => {
    if (!message.trim()) return;
    alert(`Message sent: ${message}`);
    setMessage("");
  };

  const badgeClass = (status) => {
    if (status === "Pending") return "status-badge status-pending";
    if (status === "Matched") return "status-badge status-matched";
    return "status-badge status-resolved";
  };

  return (
    <div className="admin-layout">
      <AdminSidebar />

      <main className="admin-messages">
        <div className="admin-messages__layout">
          <aside className="admin-messages__left card-surface">
            <div className="admin-messages__left-header">Messages</div>

            {conversations.map((conversation) => (
              <button
                key={conversation.id}
                onClick={() => setSelectedConversationId(conversation.id)}
                className={`admin-messages__conversation ${conversation.id === selectedConversationId ? "active" : ""}`}
              >
                <div className="admin-messages__conversation-top">
                  <strong>{conversation.title}</strong>
                  <span>{conversation.date}</span>
                </div>
                <p>{conversation.preview}</p>
              </button>
            ))}
          </aside>

          <section className="admin-messages__right card-surface">
            <div className="admin-messages__header">
              <h2>{selectedConversation.title}</h2>
              <div className="admin-messages__badges">
                {selectedConversation.status.map((status) => (
                  <span key={status} className={badgeClass(status)}>{status}</span>
                ))}
              </div>
            </div>

            <div className="admin-messages__thread">
              {selectedConversation.messages.map((msg) => (
                <div
                  key={msg.id}
                  className={msg.isUser ? "admin-messages__message-wrap admin" : "admin-messages__message-wrap user"}
                >
                  <div className={msg.isUser ? "admin-messages__bubble admin" : "admin-messages__bubble user"}>
                    {msg.text}
                  </div>
                  <div className="admin-messages__time">{msg.time}</div>
                </div>
              ))}
            </div>

            <div className="admin-messages__input-row">
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className="admin-messages__input"
              />
              <button onClick={handleSend} className="primary-btn">Send</button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}