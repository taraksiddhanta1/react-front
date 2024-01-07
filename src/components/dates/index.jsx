export default function Dates() {

    const d = new Date();
    const paragraph = document.createElement('p');
    paragraph.textContent = d;

    return (
        paragraph,
        <div>
            <p>2. Today's Date is : {d}</p>
        </div>
    )
}