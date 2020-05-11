import React from "react"
import Lottie from "react-lottie"

import animationData from "./smiley.json"

export class LottieControl extends React.Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    }

    return (
      <div style={{ height: "100vh" }}>
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
    )
  }
}
