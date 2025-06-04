// Add Task
function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  if (task !== "") {
    const li = document.createElement("li");
    li.textContent = task;
    document.getElementById("taskList").appendChild(li);
    input.value = "";
  }
}

// Add Skill
function addSkill() {
  const input = document.getElementById("skillInput");
  const skill = input.value.trim();
  if (skill !== "") {
    const li = document.createElement("li");
    li.textContent = skill;
    document.getElementById("skillList").appendChild(li);
    input.value = "";
  }
}

// Add Project
function addProject() {
  const title = document.getElementById("projectTitle").value.trim();
  const desc = document.getElementById("projectDesc").value.trim();
  if (title && desc) {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${title}</strong>: ${desc}`;
    document.getElementById("projectList").appendChild(li);
    document.getElementById("projectTitle").value = "";
    document.getElementById("projectDesc").value = "";
  }
}

// Generate CV
function generateCV() {
  document.getElementById("cvName").textContent = document.getElementById("name").value;
  document.getElementById("cvEmail").textContent = document.getElementById("email").value;
  const linkedin = document.getElementById("linkedin").value;
  document.getElementById("cvLinkedin").href = linkedin;
  document.getElementById("cvLinkedin").textContent = linkedin;

  // Tasks
  const taskItems = document.querySelectorAll("#taskList li");
  const cvTaskList = document.getElementById("cvTasks");
  cvTaskList.innerHTML = "";
  taskItems.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task.textContent;
    cvTaskList.appendChild(li);
  });

  // Skills
  const skillItems = document.querySelectorAll("#skillList li");
  const cvSkillList = document.getElementById("cvSkills");
  cvSkillList.innerHTML = "";
  skillItems.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill.textContent;
    cvSkillList.appendChild(li);
  });

  // Projects
  const projectItems = document.querySelectorAll("#projectList li");
  const cvProjectList = document.getElementById("cvProjects");
  cvProjectList.innerHTML = "";
  projectItems.forEach(project => {
    const li = document.createElement("li");
    li.innerHTML = project.innerHTML;
    cvProjectList.appendChild(li);
  });

  // Profile Photo
  const photoInput = document.getElementById("photo");
  const photoOutput = document.getElementById("cvPhoto");
  if (photoInput.files.length > 0) {
    const reader = new FileReader();
    reader.onload = function (e) {
      photoOutput.src = e.target.result;
    };
    reader.readAsDataURL(photoInput.files[0]);
  }

  // Show CV Section
  document.getElementById("cvSection").classList.remove("d-none");
}
