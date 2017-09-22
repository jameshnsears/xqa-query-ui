FROM centos:7.1.1503

RUN yum install -y epel-release
RUN yum update -y
RUN yum install -y python-lxml python-qpid python-flask
RUN yum clean all

RUN echo "root:Docker!" | chpasswd

RUN groupadd -g 2000 gale
RUN useradd -u 2000 -g gale -m -s /bin/bash gale

ENV GALEHOME=/home/gale
ENV PYTHONPATH=$GALEHOME/python/common-python/src:$GALEHOME/python/www/src

USER gale
WORKDIR $GALEHOME/python/www/src/

EXPOSE 5000

CMD ["python", "-u", "xqa.py"]
