import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Svg, { ClipPath, Defs, Image, Path, Pattern } from "react-native-svg";

import svgImage from "./bg.svg";
export default function App() {
  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />
      <Svg height="60%" width="100%" rotation={180} style={{position:'absolute',bottom:0}}>
        <Defs>
          <ClipPath id="clip">
            <Pattern
              id="pattern0"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <Path
                d="M360 99L360 0L1.9845e-05 -3.14722e-05L2.44784e-06 199C4.86195e-06 171.386 22.3858 149 50 149L310 149C337.614 149 360 126.614 360 99Z"
                fill="#FFD200"
              />
            </Pattern>
            </ClipPath>
        </Defs>
              <Path
                d="M360 99L360 0L1.9845e-05 -3.14722e-05L2.44784e-06 199C4.86195e-06 171.386 22.3858 149 50 149L310 149C337.614 149 360 126.614 360 99Z"
                fill="#FFD200"
              />
            <Image
              x="0"
              y="0"
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid slice"
              opacity="1"
              href={require("./bg-img.png")}
              clipPath="url(#clip)"
            />
        <View
          style={[
            {
              width: "100%",
              height: "60%",
              justifyContent: "center",
              alignItems: "flex-end",
              paddingRight: 43,
              transform: [{ rotate: "-180deg" }],
            },
          ]}
        >
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={()=>{console.log('press')}}
              style={{
                width: 100,
                height: 50,
                backgroundColor: "#fff",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 15,
                marginRight: 15,
              }}
            >
              <Text style={{ fontSize: 16 }}>Next</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 35,
                height: 50,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 15,
              }}
            >
              <Text style={{ fontSize: 16 }}>Skip</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Svg>
      <Svg height="60%" width="100%" rotation={0} style={{position:'absolute',top:0}}>
        <Defs>
          <ClipPath id="clip">
            <Pattern
              id="pattern0"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <Path
                d="M360 99L360 0L1.9845e-05 -3.14722e-05L2.44784e-06 199C4.86195e-06 171.386 22.3858 149 50 149L310 149C337.614 149 360 126.614 360 99Z"
                fill="#FFD200"
              />
            </Pattern>
            </ClipPath>
        </Defs>
              <Path
                d="M360 99L360 0L1.9845e-05 -3.14722e-05L2.44784e-06 199C4.86195e-06 171.386 22.3858 149 50 149L310 149C337.614 149 360 126.614 360 99Z"
                fill="#FFD200"
              />
            <Image
              x="0"
              y="0"
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid slice"
              opacity="1"
              href={require("./bg-img.png")}
              clipPath="url(#clip)"
            />
        <View
          style={{
            width: "100%",
            height: "60%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 22 }}>Login</Text>
          <Text style={{ fontSize: 16 }}>Access account</Text>
        </View>
      </Svg>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
