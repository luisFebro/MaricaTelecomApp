import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function HelpConnectionBtn() {
    const [clicked, setClicked] = useState(false);
    const [countClick, setCountClick] = useState(0);

    const handleBtnClick = () => {
        setClicked((prev) => !prev);
        if (countClick >= 2) {
            setCountClick(0);
            setClicked(false);
        } else setCountClick((prev) => ++prev);
    };

    const urlReady = countClick === 2;
    const jeanPhone = 21991120967;

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={handleBtnClick}
            style={styles.appButtonContainer}
        >
            <Text style={styles.appButtonText}>Conexão</Text>
            <Text style={styles.appButtonText}>Emergencial</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    // ...
    appButtonContainer: {
        elevation: 8,
        borderColor: "#00020f",
        borderWidth: 10,
        backgroundColor: "#ffb600",
        borderRadius: 100,
        paddingVertical: 7,
        paddingHorizontal: 20,
    },
    appButtonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff",
        alignSelf: "center",
        textShadowColor: "black",
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
    },
});

/*
<section>
    <a
        href={
            urlReady
                ? `https://api.whatsapp.com/send?phone=55${jeanPhone}`
                : "#"
        }
        rel="noopener noreferrer"
        target={urlReady ? "_blank" : "_self"}
        className={`help-btn ${clicked ? "left-anima" : ""}`}
        onClick={handleBtnClick}
    >
        {clicked ? null : parse(`Conexão<br />Emergencial`)}
        {clicked && (
            <span className="animated fadeIn delay-2s whats-logo">
                <img
                    width={35}
                    height={35}
                    src="/img/febront/whats-icon.png"
                    alt="whatsapp"
                />
            </span>
        )}
    </a>
    <style jsx>
        {`
            .whats-logo {
                left: 50%;
                transform: translateX(-50%);
            }

            .help-btn {
                position: relative;
                line-height: 18px;
                min-height: 70px;
                min-width: 143px;
                top: -37px;
                text-align: center;
                font-size: 15px;
                font-weight: 500;
                border: solid 10px rgb(0, 2, 15);
                transition: 4s ease;
                color: #fff;
                background: var(--btnColor);
                text-decoration: none !important;
                z-index: 1;
                overflow: hidden;
                padding: 7px 20px;
                text-shadow: 1px 1px 3px black;
                display: inline-block;
                border-radius: 100px;
                //transition: all 0.2s;
            }

            .help-btn:before,
            .help-btn:after {
                border-radius: 100px;
                background: linear-gradient(to right, #52c234, #061700);
                transition: 3s ease;
                content: "";
                position: absolute;
                z-index: -1;
            }

            .help-btn:before {
                top: 0;
                right: 100%;
                bottom: 0;
                left: 0;
            }

            .help-btn.left-anima:before {
                right: 0;
            }

            a:hover {
                color: #fff !important;
            }
        `}
    </style>
</section>

.button {
  // all the various shared styles reside here
  // just take whichever ones you need for the button in question
  background: $green;
  border: 2px solid $grey;
  color: white;
  display: inline-block;
  font-family: "Trebuchet MS", sans-serif;
  overflow: hidden;
  padding: 15px 45px 15px 40px;
  position: relative;
  text-decoration: none;
  transition: 4s ease;
  z-index: 1;
  &:before,
  &:after {
    background: $grey;
    transition: 0.3s ease;
    content: '';
    position: absolute;
    z-index: -1;
  }





 */

/* ARCHIVES
<div className="help-btn-gutter">
                    <style jsx>{`
                        .help-btn-gutter {
                            position: relative;
                            z-index: -1;
                            top: -10px;
                            left: -10px;
                            right: -10px;
                            bottom: -10px;
                            width: 100%;
                            height: 100%;
                            background: rgb(0, 2, 15);
                            padding: 15px 40px;
                            display: inline-block;
                            border-radius: 100px;
                        }
                    `}
                    </style>
                </div>

.help-btn::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 100px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.4s;
}


 */
