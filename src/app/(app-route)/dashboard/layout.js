export default function DashboardLayout({
    children,
    graphs,
    users,
    notifications,
    userlogin
}) {

    const isLoggedIn = true

    return isLoggedIn ? (
        <>
            <h6>{children}</h6>
            <div style={{ display: "flex", backgroundColor: "darkgreen", padding: "10px", gap: "10px" }}>
                <div style={{ display: 'flex', flexDirection: "column", flex: "1", gap: "10px" }} >
                    {graphs}
                    {users}
                </div>
                <div style={{ display: 'flex', flexDirection: "column", }} >
                    {notifications}
                </div>
            </div >
        </>
    ) : (
        <div style={{ display: 'flex', flexDirection: "column", flex: "1", gap: "10px" }} >
            {userlogin}
        </div>
    )
}