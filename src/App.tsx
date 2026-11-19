import { Cover } from "./component/cover"
import { Bus } from "./component/bus"
import { BGEffect } from "./component/bgEffect"
import { LazyDiv } from "./component/lazyDiv"
import { ShareButton } from "./component/shareButton"
import "./App.scss"

/**
 * 원주 대절버스 안내 전용 페이지 컴포넌트입니다.
 *
 * @returns {JSX.Element} 대절버스 안내 화면
 */
function App() {
  return (
    <div className="background">
      {/* 배경 애니메이션 효과 (꽃잎 내리기) */}
      <BGEffect />
      <div className="card-view">
        {/* 메인 커버 섹션 */}
        <LazyDiv className="card-group">
          <Cover />
        </LazyDiv>

        {/* 원주 대절버스 안내 및 지도 섹션 */}
        <LazyDiv className="card-group">
          <Bus />
        </LazyDiv>

        {/* 카카오톡/링크 공유 버튼 */}
        <ShareButton />
      </div>
    </div>
  )
}

export default App