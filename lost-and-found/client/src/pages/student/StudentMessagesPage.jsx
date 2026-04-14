import { useMemo, useState } from "react";
import StudentSidebar from "../../components/StudentSidebar";
import "./StudentMessagesPage.css";

export default function StudentMessagesPage() {
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

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const badgeClass = (status) => {
    if (status === "Pending") return "status-badge status-pending";
    if (status === "Matched") return "status-badge status-matched";
    return "status-badge status-resolved";
  };

  return (
    <div className="student-layout">
      <StudentSidebar />

      <main className="student-messages">
        <div className="student-messages__layout">
          <aside className="student-card student-messages__left">
            <div className="student-messages__left-header">
              <span className="student-eyebrow">Inbox</span>
              <h2 className="student-messages__left-title">Messages</h2>
            </div>

            {conversations.map((conversation) => (
              <button
                key={conversation.id}
                onClick={() => setSelectedConversationId(conversation.id)}
                className={`student-messages__conversation${conversation.id === selectedConversationId ? " active" : ""}`}
              >
                <div className="student-messages__conversation-top">
                  <strong>{conversation.title}</strong>
                  <span>{conversation.date}</span>
                </div>
                <p>{conversation.preview}</p>
              </button>
            ))}
          </aside>

          <section className="student-card student-messages__right">
            <div className="student-messages__header">
              <span className="student-eyebrow">Case</span>
              <h2 className="student-messages__title">{selectedConversation.title}</h2>
              <div className="student-messages__badges">
                {selectedConversation.status.map((status) => (
                  <span key={status} className={badgeClass(status)}>{status}</span>
                ))}
              </div>
            </div>

            <div className="student-messages__thread">
              {selectedConversation.messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`student-messages__message-wrap${msg.isUser ? " user" : " admin"}`}
                >
                  <div className={`student-messages__bubble${msg.isUser ? " user" : " admin"}`}>
                    {msg.text}
                  </div>
                  <div className="student-messages__time">{msg.time}</div>
                </div>
              ))}
            </div>

            <div className="student-messages__input-row">
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a message..."
                className="student-input student-messages__input"
              />
              <button onClick={handleSend} className="student-lift-btn">
                <span className="student-lift-btn__face">Send</span>
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
