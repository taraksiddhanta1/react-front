export default function DateTime() {

    const d = new Date();    
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const finalDateTime = d + hours + minutes + seconds;

    const paragraph = document.createElement('p');
    paragraph.textContent = finalDateTime ;

    return (
        paragraph,
        <div>
                <p>2. Today's Date & Time is : {finalDateTime}</p>
        </div>
    )
}