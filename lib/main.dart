import 'package:flutter/material.dart';

import 'helpers/constants.dart';

import 'screens/LoginScreen.dart';
import 'screens/HomeScreen.dart';

void main() {
  runApp(PangaeaStudiosApp());
}

class PangaeaStudiosApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Pangaea Studios',
      theme: ThemeData(
        primarySwatch: white,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: LoginScreen(),
      initialRoute: LoginScreen.screenRoute,
      routes: {
        LoginScreen.screenRoute: (context) => LoginScreen(),
        HomeScreen.screenRoute: (context) => HomeScreen(),
      },
    );
  }
}
