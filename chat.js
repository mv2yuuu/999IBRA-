// إعداد Firebase
var firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// تهيئة Firebase
firebase.initializeApp(firebaseConfig);

// مرجع لقاعدة البيانات
var messagesRef = firebase.database().ref("messages");

// إرسال الرسائل إلى قاعدة البيانات
document.getElementById('chatForm').addEventListener('submit', sendMessage);

function sendMessage(e) {
    e.preventDefault();

    // الحصول على الرسالة من المستخدم
    var message = document.getElementById('message').value;

    // حفظ الرسالة في قاعدة البيانات
    saveMessage(message);

    // إعادة تعيين النموذج
    document.getElementById('chatForm').reset();
}

// وظيفة لحفظ الرسالة في Firebase
function saveMessage(message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        message: message,
        timestamp: Date.now()
    });
}

// عرض الرسائل في الدردشة عند إضافتها إلى قاعدة البيانات
messagesRef.on('child_added', function(data) {
    var messageData = data.val();
    displayMessage(messageData.message);
});

// وظيفة لعرض الرسالة في صندوق الدردشة
function displayMessage(message) {
    var chatBox = document.getElementById('chatBox');
    var messageElement = document.createElement('p');
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
}
