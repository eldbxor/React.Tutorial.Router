import React from "react";
import { useNavigate } from "react-router-dom";
import { usePrompt } from "./Blocker";

const NavigateSample = () => {
  usePrompt("현재 페이지를 벗어나시겠습니까?", true);
  const navigate = useNavigate();

  // 뒤로가기
  // 인덱스로 처리, 두번 뒤로 가고싶으면 -2
  const goBack = () => {
    navigate(-1);
  };

  // 홈으로 가기
  const goHome = () => {
    navigate("/");
  };

  return (
    <div>
      <button onClick={goBack}>뒤로</button>
      <button onClick={goHome}>홈으로</button>
    </div>
  );
};

export default NavigateSample;
