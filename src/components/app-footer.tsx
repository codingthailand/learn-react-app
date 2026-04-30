
type Props = {
    title: string;
    isShowDate?: boolean; // optional prop, default to false
};

export default function AppFooter({ title, isShowDate = false }: Props) {
    return (
        <div>
            <p>{title} Footer</p>
            {isShowDate && <p>วันที่: {new Date().toLocaleDateString()}</p>}
        </div>
    );
}