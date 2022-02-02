import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  main: (height) => {
    return {
      height: height < 768 ? height + 300 : height,
      overflow: 'hidden',
      paddingTop: 100,
      position: 'relative',
    };
  },
});

export default useStyles;
