import { Paper, Box } from "@mui/material";
import { Box, styled } from "@mui/system";
import Highlight, { defaultProps } from "prism-react-renderer";
import dracula from "prism-react-renderer/themes/dracula";

const Line = styled("div")({
  display: "table-row",
});

const LineNo = styled("span")({
  display: "table-cell",
  textAlign: "right",
  paddingRight: "1em",
  userSelect: "none",
  opacity: "0.5",
});

const LineContent = styled("span")({
  display: "table-cell",
  fontFamily: "'Fira Code', monospace",
});

export const CodeBlock = ({ children }) => {
  return (
    <Highlight {...defaultProps} code={children} language="jsx" theme={dracula}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Paper
          className={className}
          sx={{
            ...style,
            padding: 2,
            margin: 2,
            bgcolor: "background.paper",
          }}
        >
          {tokens.map((line, i) => (
            <Line key={i} {...getLineProps({ line, key: i })}>
              <LineNo>{i + 1}</LineNo>
              <LineContent>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </LineContent>
            </Line>
          ))}
        </Paper>
      )}
    </Highlight>
  );
};
