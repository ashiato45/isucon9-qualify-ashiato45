import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({}));

type Props = {
  itemId: number;
  postComplete: (itemId: number) => void;
};

const WaitDone: React.FC<Props> = ({ itemId, postComplete }) => {
  const classes = useStyles();

  const onClick = (e: React.MouseEvent) => {
    postComplete(itemId);
  };

  return (
    <React.Fragment>
      <Typography variant="h6">出品者により商品が発送されました</Typography>
      <Typography variant="h6">
        商品が届き次第、受取完了ボタンを押してください
      </Typography>
      <Button onClick={onClick}>受取完了</Button>
    </React.Fragment>
  );
};

export default WaitDone;