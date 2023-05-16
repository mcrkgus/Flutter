import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter AlertDialog Example',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Flutter AlertDialog Example'),
      ),
      body: Center(
        child: ElevatedButton(
          onPressed: () {
            showDialog(
              context: context,
              builder: (BuildContext context) {
                return AlertDialog(
                  title: Text('모임'),
                  content: Container(
                    width: double.maxFinite,
                    child: Column(
                    mainAxisSize: MainAxisSize.min,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: <Widget>[
                      Text(
                        '시간: 18:30 PM',
                        //'배고파',
                        style : TextStyle(fontSize: 18),
                      ),
                      SizedBox(height: 10),
                      Text(
                        '장소: 안서 동보 앞 GS25',
                        //'배고프다고',
                        style : TextStyle(fontSize: 18),
                      ),
                    ],
                  ),
                  ),
                  actions: <Widget>[
                    TextButton(
                      onPressed: () {
                        Navigator.of(context).pop();
                      },
                      child: Text('닫기'),
                    ),
                  ],
                );
              },
            );
          },
          child: Text('모임 일정'),
        ),
      ),
    );
  }
}
