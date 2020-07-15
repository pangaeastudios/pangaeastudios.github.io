import 'package:flutter/material.dart';
import 'package:pangaea_studios_app/screens/HomeScreen.dart';

TextField buildLoginTextField({String hintText}) => TextField(
  maxLines: 1,
  decoration: InputDecoration(
    hintText: hintText,
    border: new OutlineInputBorder(
      borderRadius: BorderRadius.circular(10.0),
    ),
  ),
);

FlatButton buildAccountButton({Function onPressed, String text}) => FlatButton(
  onPressed: onPressed,
  child: Text(text),
);

class LoginScreen extends StatelessWidget {
  static String screenRoute = '/login';

  @override
  Widget build(BuildContext context) {
    final TextField usernameTextField = buildLoginTextField(hintText: 'Username');
    final TextField passwordTextField = buildLoginTextField(hintText: 'Password');

    return SafeArea(
      child: Scaffold(
        body: Column(
          children: [
            Text('LOGO HERE'),
            Divider(),
            usernameTextField,
            passwordTextField,
            Divider(),
            buildAccountButton(
              onPressed: () {
                Navigator.pushNamed(context, HomeScreen.screenRoute);
              },
              text: 'Login',
            ),
            Text('LOGO HERE'),
            buildAccountButton(
              onPressed: () {
                Navigator.pushNamed(context, HomeScreen.screenRoute);
              },
              text: 'Create an account'
            ),
          ], //todo: make it a form
        ),
      ),
    );
  }
}
