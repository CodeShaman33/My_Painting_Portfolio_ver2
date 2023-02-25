

function passionEventListener()
{
    let passions = document.querySelectorAll(".passion-item");
    // iteration
    passions.forEach(passion => 
        {
            let all = document.querySelectorAll("*:not(.passion-item)");
            passion.addEventListener("mouseenter", () => 
            {
                all.forEach(item1 =>
                    {
                        item.style.opacity = 0.5;

                    });

            }
            );
            passion.addEventListener('mouseleave', () => 
            {
                all.forEach(item1 =>
                    {
                        item.style.opacity = 1;

                    });
                
            });
        });
}


export default passionEventListener;