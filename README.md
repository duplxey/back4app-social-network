# back4app-social-network

This repository demonstrates how to build a simple social network with [Back4app](https://www.back4app.com/) and [Next.js](https://nextjs.org/).

To learn more check out the [article](https://blog.back4app.com/how-to-develop-a-social-media-app/).

## Development (frontend)

1. Install the dependencies via NPM.

    ```bash
   $ npm install
   ```

2. Create the *.env.local* environmental variables file:

    ```bash
   NEXT_PUBLIC_PARSE_APPLICATION_ID=<parse_app_id>
   NEXT_PUBLIC_PARSE_JAVASCRIPT_KEY=<parse_javascript_key>
   ```
   
   > Make sure to replace `<parse_app_id>` and `<parse_javascript_key>` with your actual ID and key. To obtain your credentials navigate to your Back4app app and select "App Settings > Security & Keys" in the sidebar.
   
3. Run the Next development server.

    ```bash
   $ npm run dev
   ```
   
4. Open [http://localhost:3000](http://localhost:3000) in your favorite web browser.

## Deployment (frontend)

To learn how to deploy the frontend to CaaS check out this [article](https://blog.back4app.com/how-to-host-a-react-application/).
