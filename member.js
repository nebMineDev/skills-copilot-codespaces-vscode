function skillsMember() {
  const member = document.querySelector('.member');
  const memberSkills = document.querySelector('.member__skills');
  const memberSkillsList = document.querySelector('.member__skills-list');
  const memberSkillsListItems = document.querySelectorAll('.member__skills-list-item');
  const memberSkillsListItemsArray = Array.prototype.slice.call(memberSkillsListItems);

  member.addEventListener('click', function() {
    memberSkills.classList.toggle('member__skills--active');
  });

  memberSkillsListItemsArray.forEach(function(item) {
    item.addEventListener('click', function() {
      item.classList.toggle('member__skills-list-item--active');
    });
  });
}

function logStatus() {
  console.log('DOM is ready');
}