angular.module('myApp', [ 'ui.bootstrap' ])
  .controller('MyController', ['$scope', function($scope) {
    $scope.panels = [
      {
        header: 'サーブレット＆JSPポケットリファレンス',
        content: 'Javaエンジニアには欠かせないサーブレット＆JSPのリファレンス。逆引き形式なので、欲しい情報がすぐ探せます。サンプルコードも満載で、ソースコードはサポートサイトからダウンロードできます。現場で役立つ開発者必携の1冊です。',
        open: true
      },
      {
        header: 'PHPライブラリ＆サンプル実践活用',
        content: 'たくさんのPHPライブラリの中から、役立つ、おもしろい、使えるものをピックアップして、その概要から使い方までをサンプルとともに紹介しています。各パートは、「Webサービス編」「UI編」「ユーティリティ編」「通信編」「フレームワーク編」で構成されています。PHPによるWebアプリ開発に、おすすめしたい一冊です。',
        disabled: true
      },
      {
        header: 'Rails 4アプリケーションプログラミング',
        content: '初心者にもわかりやすく、Rails開発を行う上での基礎的な構文、キーワード、Model、View、Controllerについて詳しく解説します。Rails4に対応しており、基礎はもちろん、ルーティング、テスト、クライアントサイド開発、Ajax対応、本番環境への移行方法など、実践的なアプリ開発を行っていくためのさまざまなテーマについて学びます。'
      },
    ];
  }]);