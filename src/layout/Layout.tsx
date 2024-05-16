import { Link, Outlet } from "react-router-dom";

function Layout() {
	return <>
		<header>
			<h1>리액트 하나씩 공부하기</h1>
			<nav>
				<h2>네비게이션 메뉴</h2>
				<ul>
					<li>
						<Link to="/login">로그인</Link>
					</li>
					<li>
						<Link to="/join">회원가입</Link>
					</li>
				</ul>
			</nav>
		</header>
		<main>
			<Outlet/>
		</main>
		<footer>학습자 : 이수경</footer>
	</>
}
export default Layout;