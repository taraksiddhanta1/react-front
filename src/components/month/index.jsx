export default function Month() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const d = new Date();
    let month = months[d.getMonth()];

    const paragraph = document.createElement('p');
    paragraph.textContent = month;

    return (
        paragraph,
        <div>
            <p>2. Current Month is : {month}</p>
        </div>
    )
}