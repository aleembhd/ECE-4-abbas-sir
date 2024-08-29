const students = [
  // ... [previous students remain unchanged]

  { rollNumber: '22WJ1A04K3', name: 'MOTHI ABHIRAM', parentPhone: '9701016317', studentPhone: '9963813930' },
  { rollNumber: '22WJ1A04K4', name: 'MOTTE PUJITHA', parentPhone: '9573527903', studentPhone: '9347790933' },
  { rollNumber: '22WJ1A04K5', name: 'MOTTE SATHWIKA', parentPhone: '9948385577', studentPhone: '8500520577' },
  { rollNumber: '22WJ1A04K6', name: 'MUDDASANI MANISHA', parentPhone: '9110364970', studentPhone: '8639654060' },
  { rollNumber: '22WJ1A04K7', name: 'MUDIGONDA SINDHUJA', parentPhone: '9603134441', studentPhone: '9032480948' },
  { rollNumber: '22WJ1A04K8', name: 'MUDRABOINA LAXMI PRASANNA', parentPhone: '9959057116', studentPhone: '8019853915' },
  { rollNumber: '22WJ1A04K9', name: 'MUKESH REDDY GUNDA', parentPhone: '9014476299', studentPhone: '6304421697' },
  { rollNumber: '22WJ1A04L0', name: 'MULAMALLA SATHWIK REDDY', parentPhone: '9100334104', studentPhone: '9948240153' },
  { rollNumber: '22WJ1A04L1', name: 'MUMMADI SRINIDHI', parentPhone: '9848455517', studentPhone: '9848315517' },
  { rollNumber: '22WJ1A04L2', name: 'N SREE BHAVANI', parentPhone: '8978117975', studentPhone: '7093477790' },
  { rollNumber: '22WJ1A04L3', name: 'NADIMINTI PRASANTH REDDY', parentPhone: '6281416184', studentPhone: '6304800846' },
  { rollNumber: '22WJ1A04L4', name: 'NALLAGASU SREEJA', parentPhone: '9963708077', studentPhone: '9490021318' },
  { rollNumber: '22WJ1A04L5', name: 'NALLANA ADITYA', parentPhone: '9618455065', studentPhone: '8130527665' },
  { rollNumber: '22WJ1A04L6', name: 'NAMINDLA CHANDINI', parentPhone: '7997563407', studentPhone: '9640350697' },
  { rollNumber: '22WJ1A04L7', name: 'NANDAGIRI VENKATA RAVIKIRAN', parentPhone: '9765444061', studentPhone: '9689326604' },
  { rollNumber: '22WJ1A04L8', name: 'NAREDLA SRAVANKUMAR', parentPhone: '9989910353', studentPhone: '8106970384' },
  { rollNumber: '22WJ1A04L9', name: 'NARIVEDDI ASHISH', parentPhone: '9059557878', studentPhone: '9182211334' },
  { rollNumber: '22WJ1A04M0', name: 'NARVA DHEERAJ GOUD', parentPhone: '9440486513', studentPhone: '7794825107' },
  { rollNumber: '22WJ1A04M1', name: 'NEELAM SRAVANTHI', parentPhone: '9490030191', studentPhone: '9440974047' },
  { rollNumber: '22WJ1A04M2', name: 'NENAVATH AMRUTHA', parentPhone: '9381138715', studentPhone: '9182643072' },
  { rollNumber: '22WJ1A04M3', name: 'NENAVATH SURESH', parentPhone: '8309038134', studentPhone: '6305540422' },
  { rollNumber: '22WJ1A04M4', name: 'NENAVATH TEJA', parentPhone: '9866893791', studentPhone: '9391180262' },
  { rollNumber: '22WJ1A04M5', name: 'NOMULA MAHENDAR', parentPhone: '8790278781', studentPhone: '9550447878' },
  { rollNumber: '22WJ1A04M6', name: 'NOMULA MAYURI', parentPhone: '8919275997', studentPhone: '8919275997' },
  { rollNumber: '22WJ1A04M7', name: 'OLEPU SAIKUMAR', parentPhone: '9030427020', studentPhone: '8639670488' },
  { rollNumber: '22WJ1A04M8', name: 'ORSU NAVEEN', parentPhone: '7730011441', studentPhone: '9515540214' },
  { rollNumber: '22WJ1A04M9', name: 'P R S SANTOSH NAIDU', parentPhone: '9866221031', studentPhone: '7075351027' },
  { rollNumber: '22WJ1A04N0', name: 'P VENKATESHWAR REDDY', parentPhone: '6301840695', studentPhone: '7989517258' },
  { rollNumber: '22WJ1A04N1', name: 'PADALA SAI PRATHYUSHA', parentPhone: '8801270620', studentPhone: '6303111711' },
  { rollNumber: '22WJ1A04N2', name: 'PADAMATI ANUSH REDDY', parentPhone: '9492627481', studentPhone: '6281917597' },
  { rollNumber: '22WJ1A04N3', name: 'PAGIDIMARRI NAVEEN', parentPhone: '9701771652', studentPhone: '8184940014' },
  { rollNumber: '22WJ1A04N4', name: 'PAGIDIPALLI DURGA RAO', parentPhone: '7286907163', studentPhone: '6309857063' },
  { rollNumber: '22WJ1A04N5', name: 'PALLA SAI TEJA', parentPhone: '9948978270', studentPhone: '9948215498' },
  { rollNumber: '22WJ1A04N6', name: 'PARMESHWAR UPADHYAY', parentPhone: '9553605992', studentPhone: '9618032802' },
  { rollNumber: '22WJ1A04N7', name: 'PATEL UDAY KIRAN REDDY', parentPhone: '9908394331', studentPhone: '6301974834' },
  { rollNumber: '22WJ1A04N8', name: 'PATHURI SANTHOSH REDDY', parentPhone: '9963785449', studentPhone: '7569429156' },
  { rollNumber: '22WJ1A04N9', name: 'PENTAPATI HEMANTH KUMAR', parentPhone: '8125263555', studentPhone: '9246063555' },
  { rollNumber: '22WJ1A04P0', name: 'PINNAM HARSHAVARDHAN', parentPhone: '8978365784', studentPhone: '6305006860' },
  { rollNumber: '22WJ1A04P1', name: 'PIPPIRI SHIVAPRASAD', parentPhone: '9553010238', studentPhone: '9848465719' },
  { rollNumber: '22WJ1A04P2', name: 'POLISHETTY SAI KIRAN', parentPhone: '9705088261', studentPhone: '7207533072' },
  { rollNumber: '22WJ1A04P3', name: 'POLWAR OM KRISHNA TEJA', parentPhone: '9010140200', studentPhone: '6303699441' },
  { rollNumber: '22WJ1A04P4', name: 'PONNAGANDLA ROHINI', parentPhone: '9948612497', studentPhone: '6305866029' },
  { rollNumber: '22WJ1A04P5', name: 'POREDDY AVINASH REDDY', parentPhone: '9949201506', studentPhone: '6302173378' },
  { rollNumber: '22WJ1A04P6', name: 'POTHAGANI KAMALAKAR', parentPhone: '9347097547', studentPhone: '9652480489' },
  { rollNumber: '22WJ1A04P7', name: 'POTHURAJU RAJU', parentPhone: '8790479209', studentPhone: '9121972693' },
  { rollNumber: '22WJ1A04P8', name: 'PUCHAKAYALA SRI CHARAN REDDY', parentPhone: '8465954914', studentPhone: '7671953387' },
  { rollNumber: '22WJ1A04P9', name: 'PULI ARUN', parentPhone: '9440838392', studentPhone: '6302171165' },
  { rollNumber: '22WJ1A04Q1', name: 'PULI SUPRIYA', parentPhone: '7675848260', studentPhone: '9391540262' },
  { rollNumber: '22WJ1A04Q2', name: 'PULLAKANDAM LAXMI VENKATA NARASIMHA SWAMY', parentPhone: '9441271382', studentPhone: '6304621330' },
  { rollNumber: '22WJ1A04Q3', name: 'PURAM RAKESH', parentPhone: '9014065565', studentPhone: '8639867875' },
  { rollNumber: '22WJ1A04Q4', name: 'PUSULURI MEGHANA', parentPhone: '8121389339', studentPhone: '7013401081' },
  { rollNumber: '22WJ1A04Q5', name: 'R ANAND', parentPhone: '7075255280', studentPhone: '9390916046' },
  { rollNumber: '22WJ1A04Q6', name: 'RAGAPURAM PRANAB SAI', parentPhone: '8497919111', studentPhone: '7680067675' },
  { rollNumber: '22WJ1A04Q7', name: 'RAMINENI YASWITHA', parentPhone: '7036332286', studentPhone: '7815956124' },
  { rollNumber: '22WJ1A04Q8', name: 'RANABOTHU NITHIN REDDY', parentPhone: '9989900516', studentPhone: '7075201361' },
  { rollNumber: '22WJ1A04Q9', name: 'RANERU NARESH', parentPhone: '9963269357', studentPhone: '9573461594' },
  { rollNumber: '22WJ1A04R0', name: 'RANGAPPA SAI KIRAN', parentPhone: '7036898066', studentPhone: '9398601171' },
  { rollNumber: '22WJ1A04R1', name: 'RANGAREDDY LAXMI PRASANNA', parentPhone: '9949207419', studentPhone: '9866986521' },
  { rollNumber: '22WJ1A04R2', name: 'RANKIREDDY OM SAI VARSHITHA', parentPhone: '9295003580', studentPhone: '9014697651' },
  { rollNumber: '22WJ1A04R3', name: 'RAO VIJAY RAO', parentPhone: '9848912071', studentPhone: '7386880115' },
  { rollNumber: '22WJ1A04R4', name: 'RENUKUNTA NIKHITHA', parentPhone: '9951390080', studentPhone: '7661987725' },
  { rollNumber: '22WJ1A04R5', name: 'RESHMA', parentPhone: '9959291693', studentPhone: '9041909235' },
  { rollNumber: '22WJ1A04R6', name: 'S KRISHNA TEJA', parentPhone: '9652050917', studentPhone: '9553477673' },
  { rollNumber: '23WJ5A0422', name: 'R BOJA RAJU', parentPhone: '9182571047', studentPhone: '9346241543' },
  { rollNumber: '23WJ5A0423', name: 'RENA SUKANYA', parentPhone: '9347342845', studentPhone: '9347342845' },
  { rollNumber: '23WJ5A0424', name: 'SAKINALA KRISHNAGEETHIKA', parentPhone: '9948676602', studentPhone: '9059442608' },
  { rollNumber: '23WJ5A0425', name: 'SATLA GANESH', parentPhone: '9391407627', studentPhone: '8985880785' },
  { rollNumber: '23WJ5A0426', name: 'SHIVVA VINOD KUMAR', parentPhone: '9550148890', studentPhone: '7288803087' },
];
  
  let messageLogs = [];
  
  // Simulated server-side database
  const localStorageDatabase = {
    saveMessage: function (log) {
      let messages = JSON.parse(localStorage.getItem('messageLogs')) || [];
      messages.push(log);
      this.cleanupOldMessages(messages);
      localStorage.setItem('messageLogs', JSON.stringify(messages));
    },
    getAllMessages: function () {
      return JSON.parse(localStorage.getItem('messageLogs')) || [];
    },
    cleanupOldMessages: function (messages) {
      const oneMonthAgo = new Date();
      oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
      const filteredMessages = messages.filter(log => new Date(log.timestamp) > oneMonthAgo);
      localStorage.setItem('messageLogs', JSON.stringify(filteredMessages));
    },
    clearAllLogs: function () {
      localStorage.removeItem('messageLogs');
    }
  };
  // Fetch messages from the server when the page loads
  document.addEventListener('DOMContentLoaded', function () {
    fetchMessagesFromServer();
    periodicCleanup();
    setupToggleButtons();
  });
  
  function toggleMessageForm() {
    const messageForm = document.getElementById('messageForm');
    if (messageForm.style.display === 'none') {
      messageForm.style.display = 'block';
      messageForm.classList.add('fade-in');
    } else {
      messageForm.style.display = 'none';
    }
  }
  
  function toggleBulkMessageForm() {
    const bulkMessageForm = document.getElementById('bulkMessageForm');
    if (bulkMessageForm.style.display === 'none') {
      bulkMessageForm.style.display = 'block';
      bulkMessageForm.classList.add('fade-in');
      document.getElementById('bulkMessageContent').value = ''; // Clear previous message
    } else {
      bulkMessageForm.style.display = 'none';
    }
  }
  
  function toggleCRProfiles() {
    const crProfiles = document.getElementById('crProfiles');
    if (crProfiles.style.display === 'none') {
      showCRProfiles();
      crProfiles.style.display = 'block';
      crProfiles.classList.add('fade-in');
    } else {
      crProfiles.style.display = 'none';
    }
  }
  
  
  function fetchMessagesFromServer() {
    messageLogs = localStorageDatabase.getAllMessages();
    updateMessageLogs();
  }
  
  // ... (keep all existing code above this point)
  
  document.getElementById('searchBtn').addEventListener('click', function () {
    const rollNumber = document.getElementById('rollNumber').value.toUpperCase();
    const student = students.find(s => s.rollNumber.toUpperCase().endsWith(rollNumber));
    const profileCard = document.getElementById('profileCard');
    const messageForm = document.getElementById('messageForm');
    const bulkMessageForm = document.getElementById('bulkMessageForm');
    const crProfiles = document.getElementById('crProfiles');
  
    // Hide other elements
    messageForm.style.display = 'none';
    bulkMessageForm.style.display = 'none';
    crProfiles.style.display = 'none';
  
    // Toggle profile card visibility
    if (profileCard.style.display === 'block') {
      profileCard.style.display = 'none';
      return; // Exit the function early if we're hiding the profile card
    }
  
    if (student) {
      document.getElementById('studentName').textContent = student.name;
      document.getElementById('studentRoll').textContent = student.rollNumber;
      document.getElementById('studentEmail').textContent = student.email;
      document.getElementById('parentName').textContent = student.parentName || 'Not available';
      document.getElementById('parentPhone').textContent = student.parentPhone;
  
      // Add student phone number to the profile card
      document.getElementById('studentPhone').textContent = student.studentPhone || 'Not available';
  
      profileCard.style.display = 'block';
      profileCard.classList.add('fade-in');
    } else {
      alert('Student not found. Please check the roll number and try again.');
      profileCard.style.display = 'none';
    }
  });
  
  // Function to hide all open elements
  function hideAllElements() {
    const elementsToHide = [
      'profileCard', 'messageForm', 'bulkMessageForm', 'crProfiles'
    ];
    elementsToHide.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        element.style.display = 'none';
      }
    });
  }
  
  // Add click event listeners to other buttons to hide elements
  const buttonsToAddListener = [
    'messageAllBtn', 'exportLogsBtn', 'clearLogsBtn'
  ];
  
  buttonsToAddListener.forEach(id => {
    const button = document.getElementById(id);
    if (button) {
      button.addEventListener('click', hideAllElements);
    }
  });
  
  // ... (keep all existing code below this point)
  
  
  function callParent() {
    const parentPhone = document.getElementById('parentPhone').textContent;
    const studentName = document.getElementById('studentName').textContent;
    const studentRoll = document.getElementById('studentRoll').textContent;
    const parentName = document.getElementById('parentName').textContent || 'Not available';
  
    if (parentPhone) {
      const cleanedNumber = parentPhone.replace(/\D/g, '');
      const telUri = `tel:${cleanedNumber}`;
      const startTime = new Date();
  
      // Initiate the call
      window.location.href = telUri;
  
      // Use a custom dialog after a delay
      setTimeout(() => {
        const endTime = new Date();
        const duration = (endTime - startTime) / 1000; // duration in seconds
  
        // Create a custom dialog
        const dialog = document.createElement('div');
        dialog.innerHTML = `
                  <div style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 9999;">
                      <div style="background: white; padding: 20px; border-radius: 10px; text-align: center;">
                          <h2>Was the call answered?</h2>
                          <button id="yesBtn" style="margin: 10px; padding: 10px 20px;">Yes</button>
                          <button id="noBtn" style="margin: 10px; padding: 10px 20px;">No</button>
                      </div>
                  </div>
              `;
        document.body.appendChild(dialog);
  
        function handleResponse(wasAnswered) {
          const status = wasAnswered ? 'Answered' : 'Unanswered';
          const log = {
            sender: 'Dr.S M K M Abbas Ahmad',
            recipient: cleanedNumber,
            studentName: studentName,
            studentRoll: studentRoll,
            parentName: parentName,
            message: `Call ${status}`,
            timestamp: new Date().toISOString(),
            status: status,
            platform: 'Call',
            duration: `${duration.toFixed(1)} seconds`
          };
          localStorageDatabase.saveMessage(log);
          fetchMessagesFromServer();
          document.body.removeChild(dialog);
        }
  
        document.getElementById('yesBtn').addEventListener('click', () => handleResponse(true));
        document.getElementById('noBtn').addEventListener('click', () => handleResponse(false));
      }, 10000); // Adjust delay as needed
    } else {
      alert('Parent phone number not available.');
    }
  }
  function callStudent() {
    const studentPhone = document.getElementById('studentPhone').textContent;
    const studentName = document.getElementById('studentName').textContent;
    const studentRoll = document.getElementById('studentRoll').textContent;
    const parentName = document.getElementById('parentName').textContent; // Add this line
  
    if (studentPhone && studentPhone !== 'Not available') {
      const cleanedNumber = studentPhone.replace(/\D/g, '');
      const telUri = `tel:${cleanedNumber}`;
      const startTime = new Date();
  
      // Initiate the call
      window.location.href = telUri;
  
      // Use a custom dialog after a delay
      setTimeout(() => {
        const endTime = new Date();
        const duration = (endTime - startTime) / 1000; // duration in seconds
  
        // Create a custom dialog
        const dialog = document.createElement('div');
        dialog.innerHTML = `
          <div style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 9999;">
            <div style="background: white; padding: 20px; border-radius: 10px; text-align: center;">
              <h2>Was the call answered?</h2>
              <button id="yesBtn" style="margin: 10px; padding: 10px 20px;">Yes</button>
              <button id="noBtn" style="margin: 10px; padding: 10px 20px;">No</button>
            </div>
          </div>
        `;
        document.body.appendChild(dialog);
  
        function handleResponse(wasAnswered) {
          const status = wasAnswered ? 'Answered' : 'Unanswered';
          const log = {
            sender: 'Dr.S M K M Abbas Ahmad',
            recipient: cleanedNumber,
            studentName: studentName,
            studentRoll: studentRoll,
            parentName: parentName, // Add this line
            message: `Student Call ${status}`,
            timestamp: new Date().toISOString(),
            status: status,
            platform: 'Call',
            duration: `${duration.toFixed(1)} seconds`
          };
          localStorageDatabase.saveMessage(log);
          fetchMessagesFromServer();
          document.body.removeChild(dialog);
        }
  
        document.getElementById('yesBtn').addEventListener('click', () => handleResponse(true));
        document.getElementById('noBtn').addEventListener('click', () => handleResponse(false));
      }, 10000); // Adjust delay as needed
    } else {
      alert('Student phone number not available.');
    }
  }
  // function showMessageForm() {
  //   const messageForm = document.getElementById('messageForm');
  //   messageForm.style.display = 'block';
  //   messageForm.classList.add('fade-in');
  // }
  
  function saveMessage() {
    const message = document.getElementById('messageContent').value;
  
    if (message.trim() === '') {
      alert('Please enter a message.');
      return;
    }
  
    const log = {
      sender: 'Dr.S M K M Abbas Ahmad',
      recipient: document.getElementById('parentPhone').textContent,
      message: message,
      timestamp: new Date().toISOString(),
      status: 'saved'
    };
  
    localStorageDatabase.saveMessage(log);
    fetchMessagesFromServer();
  
    alert('Message saved successfully');
  }
  
  function sendMessage() {
    const parentPhone = document.getElementById('parentPhone').textContent;
    const message = document.getElementById('messageContent').value;
  
    if (message.trim() === '') {
      alert('Please enter a message.');
      return;
    }
  
    // Open SMS app with pre-filled message for individual parent
    window.location.href = `sms:${parentPhone}?body=${encodeURIComponent(message)}`;
  
    const log = {
      sender: 'Dr.S M K M Abbas Ahmad',
      recipient: parentPhone,
      message: message,
      timestamp: new Date().toISOString(),
      status: 'sent'
    };
    serverDatabase.saveMessage(log);
    fetchMessagesFromServer();
  
    document.getElementById('messageContent').value = '';
    localStorageDatabase.saveMessage(log);
    fetchMessagesFromServer();
  }
  
  function showBulkMessageForm() {
    const bulkMessageForm = document.getElementById('bulkMessageForm');
    document.getElementById('bulkMessageContent').value = ''; // Clear previous message
    bulkMessageForm.style.display = 'block';
    bulkMessageForm.classList.add('fade-in');
  }
  
  function saveBulkMessage() {
    const message = document.getElementById('bulkMessageContent').value;
  
    if (message.trim() === '') {
      alert('Please enter a message.');
      return;
    }
  
    // Save a bulk message log for each student
    students.forEach(student => {
      const log = {
        sender: 'Dr.S M K M Abbas Ahmad',
        recipient: student.parentPhone,
        message: message,
        timestamp: new Date().toISOString(),
        status: 'saved (bulk)'
      };
      localStorageDatabase.saveMessage(log);
    });
  
    fetchMessagesFromServer();
    updateMessageLogs();
  
    alert('Bulk message saved successfully');
  }
  
  function sendBulkMessage() {
    const message = document.getElementById('bulkMessageContent').value;
  
    if (message.trim() === '') {
      alert('Please enter a message.');
      return;
    }
  
    // Prepare bulk SMS
    const phoneNumbers = students.map(student => student.parentPhone).join(',');
  
    // Open SMS app with pre-filled message for bulk sending
    window.location.href = `sms:${phoneNumbers}?body=${encodeURIComponent(message)}`;
  
    // Simulating sending bulk SMS and storing logs
    students.forEach(student => {
      const log = {
        sender: 'Dr.S M K M Abbas Ahmad',
        recipient: student.parentPhone,
        studentName: student.name,
        studentRoll: student.rollNumber,
        parentName: student.parentName || 'Not available',
        message: message,
        timestamp: new Date().toISOString(),
        status: 'sent'
      };
      localStorageDatabase.saveMessage(log);
    });
    fetchMessagesFromServer();
  
    document.getElementById('bulkMessageContent').value = '';
    document.getElementById('bulkMessageForm').style.display = 'none';
  }
  
  function updateMessageLogs() {
    const logsContainer = document.getElementById('messageLogs');
    logsContainer.innerHTML = '';
  
    // Only show the 5 most recent messages
    const recentLogs = messageLogs.slice(-1).reverse();
  
    recentLogs.forEach(log => {
      const logEntry = document.createElement('p');
      const timestamp = new Date(log.timestamp);
      const formattedDate = `${timestamp.toLocaleDateString()} ${timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
      logEntry.textContent = `${formattedDate} - To: ${log.recipient} - Student: ${log.studentName || 'N/A'} (${log.studentRoll || 'N/A'}) - Parent: ${log.parentName || 'N/A'} - Status: ${log.status} - Platform: ${log.platform || 'SMS'} - Duration: ${log.duration || 'N/A'}`;
      logEntry.classList.add('fade-in');
      logsContainer.appendChild(logEntry);
    });
  
    // Add a message indicating there are more logs if applicable
    if (messageLogs.length > 1) {
      const moreLogsMessage = document.createElement('p');
      moreLogsMessage.textContent = `... and ${messageLogs.length - 1} more messages`;
      moreLogsMessage.style.fontStyle = 'italic';
      moreLogsMessage.style.color = '#666';
      logsContainer.appendChild(moreLogsMessage);
    }
  }
  
  function exportMessageLogs() {
    const csvContent = "data:text/csv;charset=utf-8,"
      + "Timestamp,Sender,Recipient,Student Name,Roll Number,Parent Name,Message,Status,Platform,Duration\n"
      + messageLogs.map(e => {
        const timestamp = new Date(e.timestamp);
        const formattedTimestamp = `${timestamp.toLocaleDateString()} ${timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}`;
        return `${formattedTimestamp},${e.sender},${e.recipient},${e.studentName || ''},${e.studentRoll || ''},${e.parentName || 'Not available'},${e.message},${e.status},${e.platform || 'SMS'},${e.duration || 'N/A'}`;
      }).join("\n");
  
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    
    // Create a date string for the file name in day-month-year format
    const now = new Date();
    const dateString = `${now.getDate().toString().padStart(2, '0')}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getFullYear()}`;
    
    // Set the file name with the date
    link.setAttribute("download", `Data-Sheet (${dateString}).csv`);
    
    document.body.appendChild(link);
    link.click();
  }
  // Initialize message logs
  fetchMessagesFromServer();
  function periodicCleanup() {
    const messages = localStorageDatabase.getAllMessages();
    localStorageDatabase.cleanupOldMessages(messages);
  }
  
  // Call this function every day
  setInterval(periodicCleanup, 24 * 60 * 60 * 1000);
  document.addEventListener('DOMContentLoaded', function () {
    fetchMessagesFromServer();
    periodicCleanup();
  });
  function clearAllLogs() {
    if (confirm("Are you sure you want to clear all message logs? This action cannot be undone.")) {
      localStorage.removeItem('messageLogs');
      messageLogs = [];
      updateMessageLogs();
      alert("All message logs have been cleared.");
    }
  }
  function clearAllLogs() {
    if (confirm("Are you sure you want to clear all message logs? This action cannot be undone.")) {
      localStorageDatabase.clearAllLogs();
      messageLogs = [];
      updateMessageLogs();
      alert("All message logs have been cleared.");
    }
  }
  function showCRProfiles() {
    const crProfiles = document.getElementById('crProfiles');
    crProfiles.innerHTML = ''; // Clear existing profiles
  
    const crs = [
      { name: 'D.Akhil', rollNumber: '22WJ1A0468', email: '22WJ1A0468@gniindia.org', photo: 'https://i.ibb.co/6XNHkhv/image.png' },
      { name: 'J.Harshitha', rollNumber: '22WJ1A04A9', email: '22WJ1A04A9@gniindia.org', photo: 'https://i.ibb.co/6XNHkhv/image.png' },
    ];
  
    crs.forEach(cr => {
      const profileCard = document.createElement('div');
      profileCard.className = 'profile-card cr-card';
      profileCard.innerHTML = `
        <div class="cr-info">
          <h3>${cr.name}</h3>
          <p><strong>Roll Number:</strong> ${cr.rollNumber}</p>
          <p><strong>Email:</strong> ${cr.email}</p>
          <button onclick="callCR('${cr.rollNumber}')">Call</button>
          <button onclick="whatsappCR('${cr.rollNumber}')">WhatsApp</button>
        </div>
  
      `;
      crProfiles.appendChild(profileCard);
    });
  }
  
  function whatsappCR(rollNumber) {
    const cr = students.find(s => s.rollNumber === rollNumber);
    if (cr && cr.studentPhone) {
      let phoneNumber = cr.studentPhone.replace(/\D/g, '');
      if (phoneNumber.startsWith('91') && phoneNumber.length > 10) {
        phoneNumber = phoneNumber.slice(2);
      }
      phoneNumber = '91' + phoneNumber;
      const message = encodeURIComponent('Hello CR, this is a message from your faculty.');
      window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    } else {
      alert('WhatsApp number not available for this CR.');
    }
  }
  
  function callCR(rollNumber) {
    const cr = students.find(s => s.rollNumber === rollNumber);
    if (cr && cr.parentPhone) {
      window.location.href = `tel:${cr.parentPhone}`;
    } else {
      alert('Phone number not available for this CR.');
    }
  }
  
  function messageCR(rollNumber) {
    const cr = students.find(s => s.rollNumber === rollNumber);
    if (cr && cr.parentPhone) {
      window.location.href = `sms:${cr.parentPhone}`;
    } else {
      alert('Phone number not available for this CR.');
    }
  }
  function whatsappParent() {
    toggleCustomMessageArea('parent');
  }
  
  function whatsappStudent() {
    toggleCustomMessageArea('student');
  }
  function toggleCustomMessageArea(recipient) {
    const customMessageArea = document.getElementById('customMessageArea');
    const sendBtn = document.getElementById('sendCustomMessageBtn');
    const customMessageContent = document.getElementById('customMessageContent');
  
    if (customMessageArea.style.display === 'none') {
      customMessageArea.style.display = 'block';
      sendBtn.onclick = () => sendCustomWhatsAppMessage(recipient);
      updatePlaceholder(recipient);
    } else {
      customMessageArea.style.display = 'none';
    }
  }
  function updatePlaceholder(recipient) {
    const customMessageContent = document.getElementById('customMessageContent');
    const studentName = document.getElementById('studentName').textContent;
  
    if (recipient === 'parent') {
      customMessageContent.placeholder = "Enter your message for parent";
    } else if (recipient === 'student') {
      customMessageContent.placeholder = `Enter your message for ${studentName}`;
    }
  }
  function sendCustomWhatsAppMessage(recipient) {
    const customMessage = document.getElementById('customMessageContent').value;
    if (customMessage.trim() === '') {
      alert('Please enter a message.');
      return;
    }
  
    const studentName = document.getElementById('studentName').textContent;
    const studentRoll = document.getElementById('studentRoll').textContent;
    const parentName = document.getElementById('parentName').textContent;
  
    let phoneNumber;
    if (recipient === 'parent') {
      phoneNumber = document.getElementById('parentPhone').textContent;
    } else {
      const student = students.find(s => s.rollNumber === studentRoll);
      phoneNumber = student ? student.studentPhone : '';
    }
  
    if (!phoneNumber) {
      alert(`${recipient.charAt(0).toUpperCase() + recipient.slice(1)} WhatsApp number not available.`);
      return;
    }
  
    phoneNumber = phoneNumber.replace(/\D/g, '');
    if (phoneNumber.startsWith('91') && phoneNumber.length > 10) {
      phoneNumber = phoneNumber.slice(2);
    }
    phoneNumber = '91' + phoneNumber;
  
    const encodedMessage = encodeURIComponent(customMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  
    // Log the message
    const log = {
      sender: 'Dr.S M K M Abbas Ahmad',
      recipient: phoneNumber,
      studentName: studentName,
      studentRoll: studentRoll,
      parentName: parentName,
      message: customMessage,
      timestamp: new Date().toISOString(),
      status: 'sent',
      platform: 'WhatsApp'
    };
    localStorageDatabase.saveMessage(log);
    fetchMessagesFromServer();
  
    // Clear and hide the custom message area
    document.getElementById('customMessageContent').value = '';
    document.getElementById('customMessageArea').style.display = 'none';
  }
