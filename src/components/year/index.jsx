export default function Year() {

    const d = new Date();
    const y = d.getFullYear();

    const paragraph = document.createElement('p');
    paragraph.textContent = y;

    return (
        paragraph,
        <div>
            <p>2. Current Year is : {y}</p>
        </div>
    )
}