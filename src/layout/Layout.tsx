import { Outlet } from "react-router-dom";

function Layout() {
    return <>
        <header>리액트 하나씩 공부하기</header>
        <main>
            <Outlet/>
        </main>
        <footer>학습자 : 이수경</footer>
    </>
}
export default Layout;