
function passionEventListener() {
    let passions = document.querySelectorAll(".passion-item");
  
    passions.forEach(passion => {
      let all = document.querySelectorAll("*:not(.passion-item)");
  
      passion.addEventListener("mouseenter", () => {
        all.forEach(item1 => {
          item1.style.opacity = 0.6;
        });
  
        let parent = passion.parentElement;
        while (parent) {
          parent.style.opacity = 1;
          parent = parent.parentElement;
        }
        
        passion.style.opacity = 1;
      });
  
      passion.addEventListener('mouseleave', () => {
        all.forEach(item1 => {
          item1.style.opacity = 1;
        });
      });
    });
  }
  
  
  
  
  

function parrentOpacity(child)
{
    child.parre
}

export default passionEventListener;