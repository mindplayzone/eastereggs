#=========================
# Composer Image
#=========================
FROM composer:1.9.3 as composer

#=========================
# Application Base Image

FROM centos:7 as base

RUN \
        yum -y install \
            https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm \
            https://rpms.remirepo.net/enterprise/remi-release-7.rpm \
            yum -y install yum-utils \
    && \
        yum-config-manager --enable remi-php74 \
    && \
        yum update -y \
    && \
        yum install -y \
            nginx \
            supervisor \
            php-fpm \
            php-opcache \
            php-mysqlnd \
            php-pdo

#=========================
# Application Dev Image
#=========================
FROM base as dev

RUN \
        yum install -y \
            which \
            gcc \
            curl \
            unzip \
            vim \
            wget \
            php-cli \
            php-devel \
            php-pear \
            php-curl \
            php-zip \
            php-mbstring \
            php-intl \
    && \
        pecl install pcov \
    && \
        # Setup PHP Extensions
        echo "extension=pcov.so" > /etc/php.d/pcov.ini

COPY --from=composer /usr/bin/composer /usr/bin/composer

# nvm environment variables
ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 13.8.0

# install nvm
# https://github.com/creationix/nvm#install-script
RUN \
        mkdir -p $NVM_DIR \
    && \
        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash \
    && \
        source $NVM_DIR/nvm.sh \
        && nvm install $NODE_VERSION \
        && nvm alias default $NODE_VERSION \
        && nvm use default

# add node and npm to path so the commands are available
ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

#COPY ./www/ /var/www/easteregss

COPY ./docker/webserver/conf/nginx_dev.conf /etc/nginx/conf.d/nginx.conf
COPY ./docker/webserver/conf/supervisord.conf /etc/supervisord.conf

RUN mkdir /var/run/php-fpm/ && chmod 755 /var/run/php-fpm/

WORKDIR /var/www/easteregss

CMD ["/usr/bin/supervisord"]


