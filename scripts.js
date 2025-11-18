function showSection(sectionId) {
  document.querySelectorAll('main section').forEach(section => {
    section.classList.remove('active');
  });
  document.getElementById(sectionId).classList.add('active');
}

function uploadMedia() {
  const input = document.getElementById('mediaInput');
  const container = document.getElementById('mediaContainer');
  if (!input.files.length) {
    alert('Please select a file to upload.');
    return;
  }
  const file = input.files[0];
  const url = URL.createObjectURL(file);

  let element;
  if (file.type.startsWith('image/')) {
    element = document.createElement('img');
    element.src = url;
    element.alt = file.name;
  } else if (file.type.startsWith('video/')) {
    element = document.createElement('video');
    element.src = url;
    element.controls = true;
  } else {
    alert('Unsupported file type.');
    return;
  }
  container.appendChild(element);
  input.value = '';
}

function uploadReport() {
  const input = document.getElementById('reportInput');
  const container = document.getElementById('reportsContainer');
  const text = input.value.trim();
  if (!text) {
    alert('Please enter the report text.');
    return;
  }
  const reportDiv = document.createElement('div');
  reportDiv.classList.add('report');
  reportDiv.textContent = text;
  container.appendChild(reportDiv);
  input.value = '';
}
