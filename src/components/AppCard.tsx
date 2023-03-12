import { Card, CardContent, SelectProps, Typography } from "@mui/material";

interface AppCardProps {
  appName: string,
};

const AppCard: React.FC<AppCardProps> = ({ appName }) => {

  return (
    <>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            { appName }
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};
  
export default AppCard;
