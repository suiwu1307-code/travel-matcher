import { useState } from "react";

const questions = [
  {
    id: 1,
    emoji: "🗓️",
    question: "旅行前，你会提前多久做攻略？",
    options: [
      { text: "出发前一周就做好详细表格", value: "planner" },
      { text: "提前两三天查查大概", value: "balance" },
      { text: "在飞机上刷刷小红书就够了", value: "free" },
      { text: "攻略？到了再说！", value: "wild" },
    ],
  },
  {
    id: 2,
    emoji: "😤",
    question: "到了景点发现要排队2小时，你会？",
    options: [
      { text: "已经提前预约好了，不存在的", value: "planner" },
      { text: "排吧，顺便刷会儿手机", value: "balance" },
      { text: "去找附近没人知道的小地方", value: "free" },
      { text: "直接换下一个地方，随缘", value: "wild" },
    ],
  },
  {
    id: 3,
    emoji: "🧳",
    question: "行李箱里最不能少的是？",
    options: [
      { text: "各种备用药和充电器", value: "planner" },
      { text: "相机，随时记录", value: "balance" },
      { text: "一本书或日记本", value: "free" },
      { text: "信用卡，缺什么买什么", value: "wild" },
    ],
  },
  {
    id: 4,
    emoji: "🍜",
    question: "异国吃饭，你倾向于？",
    options: [
      { text: "提前查好必吃榜，按计划打卡", value: "planner" },
      { text: "看评分，选个靠谱的", value: "balance" },
      { text: "跟着当地人走，进小巷子找", value: "free" },
      { text: "看哪家顺眼进哪家", value: "wild" },
    ],
  },
  {
    id: 5,
    emoji: "🌙",
    question: "旅行中的理想夜晚是？",
    options: [
      { text: "整理照片、写日记、规划明天", value: "planner" },
      { text: "和朋友聊聊今天的见闻", value: "balance" },
      { text: "一个人散步，感受城市的夜", value: "free" },
      { text: "找个酒吧或夜市，继续浪", value: "wild" },
    ],
  },
  {
    id: 6,
    emoji: "🔋",
    question: "旅途中，什么最容易让你感到疲惫？",
    options: [
      { text: "行程乱了、计划被打乱", value: "planner" },
      { text: "同伴意见不一致、争来争去", value: "balance" },
      { text: "景点太商业化、人太多太吵", value: "free" },
      { text: "待在一个地方太久、没有新鲜感", value: "wild" },
    ],
  },
];

const personalities = {
  planner: {
    name: "计划控",
    emoji: "📋",
    color: "#6C63FF",
    bg: "#f0effe",
    desc: "你是旅行团里的定海神针。行程表、备用方案、应急包——你让每一次旅行都有安全感。有你在，大家不会迷路，不会错过，也不会在景点门口傻站着。",
    partners: [
      { type: "自由灵魂", emoji: "🌊", reason: "你负责骨架，TA负责灵魂。你们一起能碰出「既有保障又充满惊喜」的完美旅程。", fit: 92 },
      { type: "平衡系", emoji: "⚖️", reason: "配合默契，不会起冲突。TA愿意跟你的计划走，也会在适当时候提醒你放松。", fit: 85 },
    ],
    clash: { type: "随性派", emoji: "🎲", reason: "TA的「走哪算哪」会让你血压升高。除非你提前说好各自行动，否则容易产生摩擦。" },
    destinations: ["日本京都 🇯🇵", "瑞士苏黎世 🇨🇭", "新加坡 🇸🇬"],
  },
  balance: {
    name: "平衡系",
    emoji: "⚖️",
    color: "#F59E0B",
    bg: "#fffbeb",
    desc: "你是旅行里最受欢迎的那种人。既能跟计划控一起打卡必去景点，也能跟随性派临时起意去海边。你的超能力是：让不同风格的人都觉得和你旅行很舒服。",
    partners: [
      { type: "计划控", emoji: "📋", reason: "你们互补又和谐。TA做计划，你做润滑剂，旅途既有结构又不失温度。", fit: 88 },
      { type: "随性派", emoji: "🎲", reason: "你能接住TA的随机性，而不会觉得失控。两人在一起，旅行变成一场轻松的即兴创作。", fit: 83 },
    ],
    clash: { type: "自由灵魂", emoji: "🌊", reason: "TA喜欢独处和沉浸，你喜欢分享和互动。长时间旅行可能会觉得TA距离感太强。" },
    destinations: ["泰国清迈 🇹🇭", "西班牙巴塞罗那 🇪🇸", "台湾 🇹🇼"],
  },
  free: {
    name: "自由灵魂",
    emoji: "🌊",
    color: "#10B981",
    bg: "#ecfdf5",
    desc: "你不是在旅行，你是在「体验」。你喜欢找没人去的角落，感受真实的当地生活。打卡网红景点对你来说意义不大，旅途中的一次偶遇、一道街边小吃，才是你珍藏的记忆。",
    partners: [
      { type: "计划控", emoji: "📋", reason: "TA帮你兜底，让你的随性有了安全网。你带TA发现不在计划里的惊喜，彼此都有收获。", fit: 89 },
      { type: "随性派", emoji: "🎲", reason: "两人都不爱被束缚，很快就能达成默契。但要注意，有时候需要有人站出来做决定。", fit: 78 },
    ],
    clash: { type: "平衡系", emoji: "⚖️", reason: "TA的社交能量和分享欲有时会打扰你的独处时光。需要提前沟通各自的空间需求。" },
    destinations: ["摩洛哥马拉喀什 🇲🇦", "冰岛 🇮🇸", "云南大理 🇨🇳"],
  },
  wild: {
    name: "随性派",
    emoji: "🎲",
    color: "#EF4444",
    bg: "#fef2f2",
    desc: "你是旅行里的变量，也是最大的惊喜制造者。你不怕迷路，因为迷路本身就是旅行。你的字典里没有「行程满了」，只有「还能加」。和你在一起，每天都不知道会发生什么——这正是魅力所在。",
    partners: [
      { type: "平衡系", emoji: "⚖️", reason: "TA能跟上你的节奏，又不会让旅行彻底失控。你们在一起，刚刚好。", fit: 86 },
      { type: "自由灵魂", emoji: "🌊", reason: "两人都享受当下，不纠结于计划。默契度高，但有时候需要有人拍板决定。", fit: 79 },
    ],
    clash: { type: "计划控", emoji: "📋", reason: "TA的表格和时间表会让你喘不过气。除非双方提前约好各玩各的，否则容易摩擦。" },
    destinations: ["越南河内 🇻🇳", "墨西哥城 🇲🇽", "泰国曼谷 🇹🇭"],
  },
};

function getResult(answers) {
  const count = { planner: 0, balance: 0, free: 0, wild: 0 };
  answers.forEach(function(a) { count[a]++; });
  return Object.entries(count).sort(function(a, b) { return b[1] - a[1]; })[0][0];
}

export default function App() {
  const [step, setStep] = useState("intro");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [aiComment, setAiComment] = useState("");

  const handleStart = function() { setStep("quiz"); };

  const handleSelect = function(value) { setSelected(value); };

  const handleNext = async function() {
    const newAnswers = [...answers, selected];
    setAnswers(newAnswers);
    setSelected(null);

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      const type = getResult(newAnswers);
      setResult(type);
      setStep("result");
      setLoading(true);
      try {
        const p = personalities[type];
        const prompt = "你是一个幽默又有洞察力的旅行性格分析师。用户的旅行人格是「" + p.name + "」。请用2-3句话，用轻松幽默但有点深度的语气，给这个旅行类型写一段独特的灵魂点评。要像朋友之间互相调侃那种感觉，但又让人觉得说得好准。直接输出点评内容，不要任何前缀。";
        const res = await fetch("https://api.anthropic.com/v1/messages", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            model: "claude-sonnet-4-20250514",
            max_tokens: 1000,
            messages: [{ role: "user", content: prompt }],
          }),
        });
        const data = await res.json();
        setAiComment(data.content && data.content[0] ? data.content[0].text : "");
      } catch(e) {
        setAiComment("你是独一无二的旅行者，无法被定义。✨");
      }
      setLoading(false);
    }
  };

  const handleRestart = function() {
    setStep("intro");
    setCurrent(0);
    setAnswers([]);
    setSelected(null);
    setResult(null);
    setAiComment("");
  };

  if (step === "intro") {
    return (
      <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
        <div style={{ background: "white", borderRadius: 24, padding: "48px 36px", maxWidth: 420, width: "100%", textAlign: "center", boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}>
          <div style={{ fontSize: 64, marginBottom: 16 }}>🧳</div>
          <h1 style={{ fontSize: 26, fontWeight: 800, color: "#1a1a2e", marginBottom: 8 }}>旅行同伴配对器</h1>
          <p style={{ color: "#666", fontSize: 15, lineHeight: 1.7, marginBottom: 32 }}>
            6道情景题，测出你的旅行人格<br />
            找到最适合陪你浪迹天涯的同伴类型 ✨
          </p>
          <button
            onClick={handleStart}
            style={{ background: "linear-gradient(135deg, #667eea, #764ba2)", color: "white", border: "none", borderRadius: 50, padding: "14px 40px", fontSize: 16, fontWeight: 700, cursor: "pointer", width: "100%" }}
          >
            开始测试 →
          </button>
          <p style={{ color: "#bbb", fontSize: 12, marginTop: 16 }}>约2分钟完成</p>
        </div>
      </div>
    );
  }

  if (step === "quiz") {
    const q = questions[current];
    return (
      <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
        <div style={{ background: "white", borderRadius: 24, padding: "36px 28px", maxWidth: 460, width: "100%", boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <span style={{ fontSize: 13, color: "#999" }}>问题 {current + 1} / {questions.length}</span>
            <span style={{ fontSize: 13, color: "#667eea", fontWeight: 600 }}>{Math.round(((current + 1) / questions.length) * 100)}%</span>
          </div>
          <div style={{ background: "#f0effe", borderRadius: 8, height: 6, marginBottom: 28 }}>
            <div style={{ background: "linear-gradient(90deg, #667eea, #764ba2)", height: "100%", borderRadius: 8, width: ((current + 1) / questions.length * 100) + "%", transition: "width 0.4s" }} />
          </div>
          <div style={{ fontSize: 40, textAlign: "center", marginBottom: 12 }}>{q.emoji}</div>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: "#1a1a2e", textAlign: "center", marginBottom: 24, lineHeight: 1.5 }}>{q.question}</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {q.options.map(function(opt, i) {
              return (
                <button
                  key={i}
                  onClick={function() { handleSelect(opt.value); }}
                  style={{
                    background: selected === opt.value ? "linear-gradient(135deg, #667eea, #764ba2)" : "#f8f8ff",
                    color: selected === opt.value ? "white" : "#333",
                    border: selected === opt.value ? "2px solid transparent" : "2px solid #eee",
                    borderRadius: 14,
                    padding: "14px 18px",
                    fontSize: 14,
                    textAlign: "left",
                    cursor: "pointer",
                    fontWeight: selected === opt.value ? 600 : 400,
                    transition: "all 0.2s",
                  }}
                >
                  {opt.text}
                </button>
              );
            })}
          </div>
          <button
            onClick={handleNext}
            disabled={!selected}
            style={{
              marginTop: 24,
              width: "100%",
              background: selected ? "linear-gradient(135deg, #667eea, #764ba2)" : "#e5e5e5",
              color: selected ? "white" : "#aaa",
              border: "none",
              borderRadius: 50,
              padding: "14px",
              fontSize: 15,
              fontWeight: 700,
              cursor: selected ? "pointer" : "not-allowed",
              transition: "all 0.2s",
            }}
          >
            {current + 1 === questions.length ? "查看结果 🎉" : "下一题 →"}
          </button>
        </div>
      </div>
    );
  }

  if (step === "result" && result) {
    const p = personalities[result];
    return (
      <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", padding: "24px 16px" }}>
        <div style={{ maxWidth: 460, margin: "0 auto" }}>
          <div style={{ background: "white", borderRadius: 24, padding: "36px 28px", marginBottom: 16, boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}>
            <div style={{ textAlign: "center", marginBottom: 24 }}>
              <div style={{ fontSize: 56, marginBottom: 8 }}>{p.emoji}</div>
              <div style={{ display: "inline-block", background: p.bg, color: p.color, borderRadius: 20, padding: "4px 16px", fontSize: 13, fontWeight: 700, marginBottom: 12 }}>你的旅行人格</div>
              <h2 style={{ fontSize: 28, fontWeight: 800, color: "#1a1a2e", margin: "0 0 16px" }}>{p.name}</h2>
              <p style={{ color: "#555", fontSize: 14, lineHeight: 1.8 }}>{p.desc}</p>
            </div>
            <div style={{ background: "linear-gradient(135deg, #667eea15, #764ba215)", border: "1px solid #667eea30", borderRadius: 16, padding: "16px 20px" }}>
              <div style={{ fontSize: 12, color: "#667eea", fontWeight: 700, marginBottom: 8 }}>✨ AI灵魂点评</div>
              {loading
                ? <div style={{ color: "#999", fontSize: 13 }}>分析中...</div>
                : <p style={{ color: "#444", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{aiComment}</p>
              }
            </div>
          </div>

          <div style={{ background: "white", borderRadius: 24, padding: "28px", marginBottom: 16, boxShadow: "0 10px 40px rgba(0,0,0,0.1)" }}>
            <h3 style={{ fontSize: 16, fontWeight: 800, color: "#1a1a2e", marginBottom: 20 }}>👯 最适合你的同伴</h3>
            {p.partners.map(function(partner, i) {
              return (
                <div key={i} style={{ background: "#f8f8ff", borderRadius: 16, padding: "16px", marginBottom: 12 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                    <span style={{ fontWeight: 700, fontSize: 15 }}>{partner.emoji} {partner.type}</span>
                    <span style={{ background: "#667eea", color: "white", borderRadius: 20, padding: "2px 10px", fontSize: 12, fontWeight: 700 }}>契合度 {partner.fit}%</span>
                  </div>
                  <div style={{ background: "#e8e5ff", borderRadius: 6, height: 5, marginBottom: 10 }}>
                    <div style={{ background: "linear-gradient(90deg, #667eea, #764ba2)", height: "100%", borderRadius: 6, width: partner.fit + "%" }} />
                  </div>
                  <p style={{ color: "#666", fontSize: 13, lineHeight: 1.6, margin: 0 }}>{partner.reason}</p>
                </div>
              );
            })}
          </div>

          <div style={{ background: "white", borderRadius: 24, padding: "28px", marginBottom: 16, boxShadow: "0 10px 40px rgba(0,0,0,0.1)" }}>
            <h3 style={{ fontSize: 16, fontWeight: 800, color: "#1a1a2e", marginBottom: 16 }}>⚠️ 旅行避雷搭档</h3>
            <div style={{ background: "#fff5f5", border: "1px solid #fecaca", borderRadius: 16, padding: "16px" }}>
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 8, color: "#ef4444" }}>{p.clash.emoji} {p.clash.type}</div>
              <p style={{ color: "#666", fontSize: 13, lineHeight: 1.6, margin: 0 }}>{p.clash.reason}</p>
            </div>
          </div>

          <div style={{ background: "white", borderRadius: 24, padding: "28px", marginBottom: 20, boxShadow: "0 10px 40px rgba(0,0,0,0.1)" }}>
            <h3 style={{ fontSize: 16, fontWeight: 800, color: "#1a1a2e", marginBottom: 16 }}>🌍 推荐旅行目的地</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {p.destinations.map(function(dest, i) {
                return (
                  <div key={i} style={{ background: "#f8f8ff", borderRadius: 12, padding: "12px 16px", fontSize: 14, fontWeight: 600, color: "#333" }}>
                    {dest}
                  </div>
                );
              })}
            </div>
          </div>

          <button
            onClick={handleRestart}
            style={{ width: "100%", background: "white", color: "#667eea", border: "2px solid white", borderRadius: 50, padding: "14px", fontSize: 15, fontWeight: 700, cursor: "pointer" }}
          >
            再测一次 🔄
          </button>
          <p style={{ textAlign: "center", color: "rgba(255,255,255,0.7)", fontSize: 12, marginTop: 16 }}>截图分享给你的旅行好友 📸</p>
        </div>
      </div>
    );
  }

  return null;
}
