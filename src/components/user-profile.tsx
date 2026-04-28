export default function UserProfile() {
    const fullname = "Akenarin Komkoon";
    // const phone = <span>081-234-5678</span>;
    const isShowEmail = true; // false

    return (
        <>
            <h2>{fullname.toUpperCase()}</h2>
            {isShowEmail && <p>codingthailand@gmail.com</p>}
            {/* <p>{phone}</p> */}
        </>
    );
}