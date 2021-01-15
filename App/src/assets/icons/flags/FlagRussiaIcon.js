import * as React from "react"
import Svg, { Defs, ClipPath, Circle, G, Path } from "react-native-svg"

function FlagRussiaIcon(props) {
  return (
    <Svg width={20} height={20} viewBox="0 0 18 18" {...props}>
      <Defs>
        <ClipPath id="prefix__a">
          <Circle
            data-name="\u042D\u043B\u043B\u0438\u043F\u0441 11"
            cx={9}
            cy={9}
            r={9}
            transform="translate(35 312)"
            fill="#fff"
            stroke="#707070"
          />
        </ClipPath>
      </Defs>
      <G
        data-name="\u0413\u0440\u0443\u043F\u043F\u0430 \u043C\u0430\u0441\u043E\u043A 1"
        transform="translate(-35 -312)"
        clipPath="url(#prefix__a)"
      >
        <G data-name="Layer 2">
          <Path
            data-name="\u041F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A 1849"
            fill="#f2f2f2"
            d="M31.063 312h25.875v9H31.063z"
          />
          <Path
            data-name="\u041F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A 1850"
            fill="#ca2e27"
            d="M31.063 321h25.875v9H31.063z"
          />
          <Path
            data-name="\u041F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A 1851"
            fill="#214193"
            d="M31.063 318h25.875v6H31.063z"
          />
        </G>
      </G>
    </Svg>
  )
}

export default FlagRussiaIcon
