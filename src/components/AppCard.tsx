import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { AppProps } from "@/globals";

const AppCard: React.FC<AppProps> = ({ appName, appDescription, appHref }) => {

  return (
    <>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            { appName }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            { appDescription }
          </Typography>
          <CardActions>
            <Button size="small" href={ appHref }>Go</Button>
          </CardActions>
        </CardContent>
      </Card>
    </>
  );
};
  
export default AppCard;
