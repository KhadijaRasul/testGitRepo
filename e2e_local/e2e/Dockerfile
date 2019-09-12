ARG AWS_REGION=us-east-1
ARG AWS_ACCOUNT=236809841816

FROM $AWS_ACCOUNT.dkr.ecr.$AWS_REGION.amazonaws.com/ma-base:v1.0.0

RUN echo "Creating user..." &&\
 useradd -m -d /home/ops/ ops && echo "ops:opspass" | chpasswd &&\
 mkdir -p /home/ops/.ssh/ && chown -R ops /home/ops/.ssh/ &&\
 usermod -aG wheel ops

ADD --chown=ops:ops ./ /home/ops/e2e

WORKDIR /home/ops/e2e

# start -- block likely belongs in a prebuilt protractor image that we use
RUN yum -y update &&\
 yum -y install -y gcc-c++ make &&\
 curl -sL https://rpm.nodesource.com/setup_11.x | sudo -E bash - &&\
 yum -y install nodejs
# end --

RUN chmod +x wait_loop.sh &&\
 chmod +x start_tests.sh

USER ops

RUN mkdir results
RUN mkdir -p Test/reports/screenshots

RUN npm install &&\
 npm run pretest &&\
 npm run ciwebdriver-update

CMD npm run citest
