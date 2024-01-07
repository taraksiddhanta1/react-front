export default function Time() {
    const time = now.toLocaleTimeString();
    const paragraph = document.createElement('p');
    paragraph.textContent = time;

    return (
        paragraph,
        <div>
            <p>1. Current Time is : {time}</p>
        </div>
    )
}