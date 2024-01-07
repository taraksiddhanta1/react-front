export default function Day() {
    const d = new Date();
    const days = d.getDay();

    const paragraph = document.createElement('p');
    paragraph.textContent = days;

    return (
        paragraph,
        <div>
            <p>2. Today is : {days}</p>
        </div>
    )
}