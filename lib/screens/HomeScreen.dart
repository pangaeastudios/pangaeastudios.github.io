import 'package:flutter/material.dart';

import 'DefaultScreen.dart';

import '../helpers/styles.dart';

import '../widgets/MusicWidget.dart';

FlatButton buildHomeScreenButton({Function onPressed, String text}) =>
    FlatButton(
      onPressed: onPressed,
      child: Text(text),
      shape: homeButtonShape,
    );

class HomeScreen extends StatelessWidget {
  static String screenRoute = '/home';

  @override
  Widget build(BuildContext context) {
    return DefaultStatelessScreen(
        appBarWidget: Text('LOGO HERE'),
        body: Column(
          children: [
            Row(
              children: [
                MusicWidget(),
                Column(
                  children: [
                    buildHomeScreenButton(
                      onPressed: () {},
                      text: 'Photos',
                    ),
                    buildHomeScreenButton(
                      onPressed: () {},
                      text: 'Films',
                    )
                  ],
                ),
              ],
            ),
            Column(
              children: [
                buildHomeScreenButton(
                  onPressed: () {},
                  text: 'Games',
                ),
                buildHomeScreenButton(
                  onPressed: () {},
                  text: '3D Space',
                ),
                buildHomeScreenButton(
                  onPressed: () {},
                  text: 'XR',
                ),
              ],
            ),
          ],
        ));
  }
}
