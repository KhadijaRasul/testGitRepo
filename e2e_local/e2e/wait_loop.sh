#!/usr/bin/env bash

SERVER_READY_STRING="OK ${FIIX_ENVIRONMENT}"

while :;
do
    echo "Checking if application is ready..."

    APP_STATUS_CHECK_RETURN_STRING=$(wget -SO- -o /dev/null -T 180 'https://queen.'"${FIIX_MASTER_DOMAIN}"'/ec2lbcheck' | grep -c "${SERVER_READY_STRING}")
    APP_STATUS_CHECK_TRIMMED_RESULT="$(echo -e ${APP_STATUS_CHECK_RETURN_STRING} | tr -d '[[:space:]]')"

    if [ "1" = "${APP_STATUS_CHECK_TRIMMED_RESULT}" ]; then
        echo "Application has reported it is ready!"
        break
    fi

    echo "Not ready yet."
    sleep 30
done

curl -i https://test.${FIIX_MASTER_DOMAIN}
