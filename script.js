const students = [
    { rollNumber: '22WJ1A0401', name: 'A MURAHARI', parentPhone: '9885049411', studentPhone: '9985579233' },
    { rollNumber: '22WJ1A0402', name: 'A SRUTHI', parentPhone: '6304372561', studentPhone: '9390602450' },
    { rollNumber: '22WJ1A0403', name: 'AAKARAM NAGARAJU', parentPhone: '9492208418', studentPhone: '6281047710' },
    { rollNumber: '22WJ1A0404', name: 'ABBANABOINA MAHESHWARI', parentPhone: '9515802425', studentPhone: '8125862811' },
    { rollNumber: '22WJ1A0407', name: 'ADARISANDE ROSHAN', parentPhone: '8179622519', studentPhone: '6309672150' },
    { rollNumber: '22WJ1A0408', name: 'ADDAGATLA SREEJA', parentPhone: '9441681417', studentPhone: '9247990770' },
    { rollNumber: '22WJ1A0409', name: 'AJMEERA GANESH', parentPhone: '6281244128', studentPhone: '6281244128' },
    { rollNumber: '22WJ1A0410', name: 'AKULA MAHASRI', parentPhone: '9704940850', studentPhone: '9052270070' },
    { rollNumber: '22WJ1A0411', name: 'ALIGAPALLY ANUSHA', parentPhone: '9959360557', studentPhone: '9392967364' },
    { rollNumber: '22WJ1A0412', name: 'AMARACHINTHALA JHANSI', parentPhone: '9505145731', studentPhone: '9848835477' },
    { rollNumber: '22WJ1A0413', name: 'ANANTHA KARTHIK', parentPhone: '9347652942', studentPhone: '8309782611' },
    { rollNumber: '22WJ1A0414', name: 'ANE PRAVEEN PRASAD', parentPhone: '6305395547', studentPhone: '9398605543' },
    { rollNumber: '22WJ1A0416', name: 'APPAM DEEPAK', parentPhone: '9989445564', studentPhone: '8074351907' },
    { rollNumber: '22WJ1A0417', name: 'ARJULA HRUSHIKESH', parentPhone: '9849221425', studentPhone: '9849329440' },
    { rollNumber: '22WJ1A0418', name: 'ARUGULA GANGADHAR', parentPhone: '8790167685', studentPhone: '7674079274' },
    { rollNumber: '22WJ1A0420', name: 'BABBURU SIDHARTHA', parentPhone: '9866556029', studentPhone: '6302339370' },
    { rollNumber: '22WJ1A0421', name: 'BADAVATH JAGADEESH', parentPhone: '8106324530', studentPhone: '6305551906' },
    { rollNumber: '22WJ1A0423', name: 'BAINDLA MANASA', parentPhone: '9849379375', studentPhone: '8143157362' },
    { rollNumber: '22WJ1A0424', name: 'BALERAO UDAY PRAKASH', parentPhone: '9494666555', studentPhone: '9494115999' },
    { rollNumber: '22WJ1A0425', name: 'BANDA DILIP KUMAR', parentPhone: '9550401473', studentPhone: '8328574748' },
    { rollNumber: '22WJ1A0426', name: 'BANDARI HARSHITHA', parentPhone: '9951808580', studentPhone: '9346116704' },
    { rollNumber: '22WJ1A0427', name: 'BANOTH PRASHANTH', parentPhone: '707533578', studentPhone: '9440123823' },
    { rollNumber: '22WJ1A0428', name: 'BARGUR S MANIVASAN', parentPhone: '9246365631', studentPhone: '6381699263' },
    { rollNumber: '22WJ1A0429', name: 'BATHUKA LAVANYA', parentPhone: '9381737197', studentPhone: '7013533168' },
    { rollNumber: '22WJ1A0430', name: 'BAVANDLA VARSHIKA', parentPhone: '9392621488', studentPhone: '9392621488' },
    { rollNumber: '22WJ1A0431', name: 'BEGARI NIKHIL CHAITANYA', parentPhone: '9963409028', studentPhone: '6303762866' },
    { rollNumber: '22WJ1A0434', name: 'BHUKYA ANUSHA', parentPhone: '9010386906', studentPhone: '9014496712' },
    { rollNumber: '22WJ1A0436', name: 'BILLA VISHNUVARDHAN REDDY', parentPhone: '8897318246', studentPhone: '7995434376' },
    { rollNumber: '22WJ1A0437', name: 'BITLA ABHINAY REDDY', parentPhone: '9951075656', studentPhone: '6281096062' },
    { rollNumber: '22WJ1A0438', name: 'BODDU VAMSHI KRISHNA', parentPhone: '9542458800', studentPhone: '8374659307' },
    { rollNumber: '22WJ1A0439', name: 'BOJRABONA DEEPSHIKA', parentPhone: '9989771206', studentPhone: '8341401539' },
    { rollNumber: '22WJ1A0441', name: 'BOLLEDHU VINAY KUMAR', parentPhone: '6305445863', studentPhone: '8074345420' },
    { rollNumber: '22WJ1A0442', name: 'BOROJU SAIMADHURA', parentPhone: '9392654570', studentPhone: '9010593647' },
    { rollNumber: '22WJ1A0443', name: 'BRAMANDLAPELLI SRAVAN KUMAR', parentPhone: '9701461583', studentPhone: '7670852504' },
    { rollNumber: '22WJ1A0444', name: 'BURRA HARSHITHA', parentPhone: '6305948874', studentPhone: '7702289574' },
    { rollNumber: '22WJ1A0445', name: 'BURUGU NITHISHA', parentPhone: '9502562210', studentPhone: '9502562210' },
    { rollNumber: '22WJ1A0447', name: 'C THIRUMALESH', parentPhone: '9966925178', studentPhone: '6304784255' },
    { rollNumber: '22WJ1A0448', name: 'CH POOJITHA', parentPhone: '9000908388', studentPhone: '9100144212' },
    { rollNumber: '22WJ1A0449', name: 'CHALDI PARAMJOUTH SAI GOKUL', parentPhone: '9618170017', studentPhone: '8309593013' },
    { rollNumber: '22WJ1A0450', name: 'CHALLA YASHWANTH REDDY', parentPhone: '9666678904', studentPhone: '9515731969' },
    { rollNumber: '22WJ1A0451', name: 'CHANDALA ARUN KUMAR', parentPhone: '8186983322', studentPhone: '7075802750' },
    { rollNumber: '22WJ1A0452', name: 'CHIDRAPU SHIVA CHARAN', parentPhone: '9848729099', studentPhone: '6303565391' },
    { rollNumber: '22WJ1A0453', name: 'CHILUVERU PHANINDRA', parentPhone: '9030491266', studentPhone: '9100501547' },
    { rollNumber: '22WJ1A0454', name: 'CHINNI POOJITHA', parentPhone: '9949847165', studentPhone: '9014290472' },
    { rollNumber: '22WJ1A0455', name: 'CHIRRABOINA MURALI KRISHNA', parentPhone: '9848662707', studentPhone: '9121954861' },
    { rollNumber: '22WJ1A0456', name: 'CHITHANURU MANIVARDHAN', parentPhone: '9441364402', studentPhone: '9573501944' },
    { rollNumber: '22WJ1A0457', name: 'CHITIKEM SRIHITH', parentPhone: '9963303331', studentPhone: '7416531331' },
    { rollNumber: '22WJ1A0458', name: 'CHITTIMALLA SHIVA', parentPhone: '9959422972', studentPhone: '9392803525' },
    { rollNumber: '22WJ1A0459', name: 'CHITTIPROLU VARSHITHSAI', parentPhone: '9346885683', studentPhone: '9849279797' },
    { rollNumber: '22WJ1A0460', name: 'DAMARGIDDA ASHOK', parentPhone: '9010791824', studentPhone: '6305879136' },
    { rollNumber: '22WJ1A0461', name: 'DAMERA NANDU', parentPhone: '8106370672', studentPhone: '7842825960' },
    { rollNumber: '22WJ1A0462', name: 'DANDU VINAY KUMAR', parentPhone: '9966117935', studentPhone: '7674857104' },
    { rollNumber: '22WJ1A0464', name: 'DANUGURI BHAVANA', parentPhone: '6300893663', studentPhone: '6300893663' },
    { rollNumber: '23WJ5A0401', name: 'BATHULA JAGADEESH', parentPhone: '7675820634', studentPhone: '7901283546' },
    { rollNumber: '23WJ5A0402', name: 'BODDUNA ISHWARYA', parentPhone: '7207402019', studentPhone: '9391634890' },
    { rollNumber: '23WJ5A0403', name: 'CHARUGUNDLA SAHANI', parentPhone: '9948122928', studentPhone: '6301341112' },
    { rollNumber: '23WJ5A0404', name: 'DHARAVATH SHILPA', parentPhone: '8106393745', studentPhone: '9390396083' },
    { rollNumber: '23WJ5A0405', name: 'ERRA PAVAN KALYAN', parentPhone: '7842124817', studentPhone: '9392684042' },
    { rollNumber: '23WJ5A0406', name: 'GADDAM SRAVIKA', parentPhone: '9705905747', studentPhone: '9640522742' },
    { rollNumber: '23WJ5A0407', name: 'GADIGA SANJANA', parentPhone: '9493620896', studentPhone: '9440440498' },
    { rollNumber: '23WJ5A0408', name: 'GATE NAVYA', parentPhone: '9553573170', studentPhone: '9390971685' },
    { rollNumber: '23WJ5A0409', name: 'GOUDA VYSHNAVI', parentPhone: '8008390823', studentPhone: '8179618559' },
    { rollNumber: '23WJ5A0410', name: 'KALAPALA PADMA SRI', parentPhone: '9398927676', studentPhone: '9392903468' },
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
