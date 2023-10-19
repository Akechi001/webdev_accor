export default function Panel({
    title,
    children,
    isActive,
    onShow
}) {
    return (
        <button className="panel" onClick={onShow}>
            {title}
            {isActive ? (
                <p>{children}</p>
            ) : ('')}
        </button>
    );
}