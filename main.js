// 心情關鍵字對應心靈雞湯
const moodQuotes = [
    { mood: ['難過', '傷心', '沮喪', '低落', '失落'], quote: '每個低潮都是成長的開始，請相信明天會更好。' },
    { mood: ['開心', '快樂', '高興', '喜悅'], quote: '保持這份快樂，讓幸福延續下去！' },
    { mood: ['壓力', '煩惱', '焦慮', '緊張'], quote: '深呼吸，給自己一點空間，一切都會慢慢好起來。' },
    { mood: ['生氣', '憤怒', '不爽'], quote: '放下怒氣，讓心靈回歸平靜，世界會更美好。' },
    { mood: ['孤單', '寂寞'], quote: '你並不孤單，這個世界上總有人在關心你。' },
    { mood: ['害怕', '恐懼'], quote: '勇敢面對，黑暗終將過去，光明就在前方。' },
    { mood: ['疲倦', '累', '無力'], quote: '休息一下，給自己充電，明天會更有力量。' },
    { mood: ['迷惘', '困惑'], quote: '人生的路雖然曲折，但每一步都算數。' },
    { mood: ['生病', '不舒服'], quote: '照顧好自己，健康最重要，祝你早日康復！' },
    { mood: ['加油', '努力'], quote: '你的努力終將被看見，請繼續相信自己！' },
];

const defaultQuotes = [
    '相信自己，你能做到。',
    '每一天都是新的開始。',
    '困難是成長的養分。',
    '保持微笑，迎接挑戰。',
    '你的努力終將被看見。',
    '別放棄，奇蹟正在發生。',
    '用心生活，感受美好。',
    '勇敢追夢，未來可期。'
];

const chatWindow = document.getElementById('chat-window');
const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');

function getComfortQuote(message) {
    for (const item of moodQuotes) {
        for (const keyword of item.mood) {
            if (message.includes(keyword)) {
                return item.quote;
            }
        }
    }
    // 若無明顯心情關鍵字，隨機給一句正能量語錄
    return defaultQuotes[Math.floor(Math.random() * defaultQuotes.length)];
}

function appendMessage(sender, text) {
    const msgDiv = document.createElement('div');
    msgDiv.innerHTML = `<b>${sender}：</b>${text}`;
    msgDiv.style.marginBottom = '8px';
    chatWindow.appendChild(msgDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

chatForm.onsubmit = function(e) {
    e.preventDefault();
    const msg = userInput.value.trim();
    if(!msg) return;
    appendMessage('你', msg);
    userInput.value = '';
    setTimeout(()=>{
        const comfort = getComfortQuote(msg);
        appendMessage('解憂AI', comfort);
    }, 500);
};

// 初始歡迎訊息
appendMessage('解憂AI', '你好！請告訴我你的心情或煩惱，我會給你一句專屬的心靈雞湯。');
