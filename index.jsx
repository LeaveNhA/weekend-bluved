export const refreshFrequency = 24 * 60 * 60 * 1000;
export const command = "./bluved/scripts/windowcount.sh";

const styles = {
    colors: {
        fg: "rgba(0, 0, 0,0.8)",
        dim: "#993399",
        bg: "#000000",
        red: "#ff8700",
        accent: "#663399"
    },
    effects: {
        blur: "10px",
    },
    palette:
    [
        "#4F6F73",
        "#05F2C7",
        "#04D9B2",
        "#7BA69E",
        "#A9D9C7",
    ],
    fontSizes: ["14px", "16px", "24px", "32px", "38px"],
    fontSize: "14px",
    lineHeight: "20px",
    fontFamily: "'Hack Nerd Font', 'SF Mono', monospace"
};

const config = {
    "windows_offset_left": "280px",
    "windows_label_max_width": "30ch",
    "widget.allow-external-scripts": true
};

const style = {
    display: "flex",
    position: "absolute",
    borderRadius: "5px",
    width: "100vw",
    height: "100vh",
	  zIndex: -1,
};

const parse = data => {
    try {
        return JSON.parse(data);
    } catch (e) {
        return undefined;
    }
};

export const render = ({ output }) => {
    console.info("@Bluved:render:update!");
    const data = parse(output);
    if (typeof data === "undefined") {
        return null;
    }
    if (typeof data.error !== "undefined") {
        return (
            <div style={style}>
              <Error msg={`Error: ${data.error}`} side="left" />
            </div>
        );
    }
    if(data.windows.length > 0)
        return (
            <div key="bluved-wrapper" style={style}>
              <style>{`
.bluvved {
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  margin: -6px;

  position: absolute;
  border-radius: 5px;
  top: 55px;
  left: calc(10px * 2 - 1.5px);
  width: calc(100% - (10px * 2 - 1.5px) * 1.5);
  height: calc(100% - 50px - 10px);
}`}</style>
              <div key="bluved-content" className="bluvved"></div>
            </div>
        );
    else
        return null;
};

export default null;
