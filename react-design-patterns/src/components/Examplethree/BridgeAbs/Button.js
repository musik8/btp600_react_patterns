export const Link = ({
  url,
  uiComponent,
  uiProps,
  children,
}) => {
  const bridgeProps = {
    ...uiProps,
    onClick: () => window.open(url, '_blank')
  }

  return React.createElement(uiComponent, bridgeProps, children)
}
