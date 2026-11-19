import { Map } from "./map"
import BusIcon from "../../icons/bus-icon.svg?react"
import { LazyDiv } from "../lazyDiv"

/**
 * 대절버스 탑승 위치와 정보를 표시하는 컴포넌트입니다.
 *
 * @returns {JSX.Element} 대절버스 안내 섹션
 */
export const Bus = () => {
  return (
    <>
      {/* 지도 및 주소 섹션 */}
      <LazyDiv className="card location">
        <h2 className="english">Charter Bus</h2>
        <div className="addr">
          대절버스 탑승 안내
          {/* 💡 아래 탑승 장소 상세 주소를 수정하세요 💡 */}
          <div className="detail">강원특별자치도 원주시 혁신로 60
          <br />
          (건강보험심사평가원 1사옥 버스 주차장)
          </div>
        </div>
        <Map />
      </LazyDiv>

      {/* 대절버스 상세 정보 안내 섹션 */}
      <LazyDiv className="card location">
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading"> 💡대절버스 (원주 ↔ 평택)💡 </div>
          <div />
          <div className="content">
            <b>원주 → 평택</b> |
            <br />
            <span style={{ fontSize: "0.8rem" }}>
              <strong>출발 시간</strong>: 2027년 1월 23일(토) 오후 1시
              <br />
              <strong>탑승 장소</strong>: 건강보험심사평가원 1사옥 버스 주차장
              <br />
            </span>
            <br />
            <b>평택 → 원주</b> |
            <br />
            <span style={{ fontSize: "0.8rem" }}>
              <strong>출발 시간</strong>: 2027년 1월 23일(토) 오후 6시 30분
              <br />
              <strong>탑승 장소</strong>: M프라자 앞
              <br />
              <br />
            </span>
          </div>
          <div />
          <div className="content">
            <b>버스 탑승 문의</b> |
            <br />
            {/* 💡 아래 인솔자 정보를 수정하세요 💡 */}
            0선영 (신부 친구 / 010-0000-0000)
            <br />
            <span style={{ letterSpacing: "-1px", fontSize: "0.7rem" }}>
              📌 원활한 이동을 위해 출발 10분 전까지 탑승해 주시기 바랍니다.
            </span>
            <br />
          </div>
        </div>
      </LazyDiv>
    </>
  )
}