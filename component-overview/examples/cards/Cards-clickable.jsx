import { CardBase, IconCard } from '@sb1/ffe-cards-react';
import { Paragraph, Heading2 } from '@sb1/ffe-core-react';
import { Icon } from '@sb1/ffe-icons-react';

() => {
    const savingsIconXlarge =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iNDgiPjxwYXRoIGQ9Ik0yNDMuMDc4LTE0MC4wMDFxLTIwLjIzMSAwLTM3LjgxNy0xMy4zNy0xNy41ODYtMTMuMzY5LTIzLjEwNi0zMi43MDctMjUtODcuNTM5LTQwLjk2NS0xNDguMjY2LTE1Ljk2Ni02MC43MjctMjUuMDE5LTEwNC42ODItOS4wNTItNDMuOTU1LTEyLjYxMS03Ni43OTEtMy41NTktMzIuODM2LTMuNTU5LTY0LjM2MyAwLTgzLjM1OCA1OC4yMzEtMTQxLjU4OCA1OC4yMy01OC4yMzEgMTQxLjc2OC01OC4yMzFoMjEwLjAwMXEyNy0zNiA2Ni01OCAzOC45OTktMjIgODMuOTk5LTIyIDE2LjUzOCAwIDI4LjI2OCAxMS43MzEgMTEuNzMxIDExLjczIDExLjczMSAyOC4yNjggMCA0LjA3Ny0xLjExNiA3Ljk2MS0xLjExNSAzLjg4NS0yLjM0NiA3LjczMS00LjM4NSAxMS43NjktOC40NjEgMjUuNDYyLTQuMDc3IDEzLjY5Mi03LjYxNiAzNC43N2wxMDQuMDc4IDEwNC4wNzdoNDYuNjE0cTEyLjM1NiAwIDIwLjYwMSA4LjI0NiA4LjI0NiA4LjI0NSA4LjI0NiAyMC42MDF2MTk0LjMwNXEwIDkuODc4LTUuMjQ2IDE3LjU5NS01LjI0NiA3LjcxNy0xNC45ODUgMTAuMjUxbC04OC44NDkgMjkuNTI4LTUzLjMwNSAxNzguMDFxLTYuMDI2IDE4Ljg0NS0yMS4wNzUgMzAuMTUzLTE1LjA0OSAxMS4zMDktMzQuNjE3IDExLjMwOWgtODQuMjI4cS0yMy41OTYgMC00MC42NDUtMTcuMDQ4LTE3LjA0OC0xNy4wNDktMTcuMDQ4LTQwLjY0NXYtMjIuMzA3SDM3OS45OTl2MjIuMzA3cTAgMjMuNTk2LTE3LjA0OCA0MC42NDUtMTcuMDQ5IDE3LjA0OC00MC42NDUgMTcuMDQ4aC03OS4yMjhabS0zLjg0Ni00NS4zODRoODMuMDc0cTUuMzg1IDAgOC44NDctMy40NjIgMy40NjItMy40NjIgMy40NjItOC44NDd2LTY3LjY5MWgyMTAuNzd2NjcuNjkxcTAgNS4zODUgMy40NjIgOC44NDcgMy40NjIgMy40NjIgOC44NDcgMy40NjJoODQuMjI4cTMuODQ3IDAgNy4xMTYtMi4zMDggMy4yNjktMi4zMDggNC44MDgtNi41MzlsNTkuOTIzLTE5OS45OTkgMTAwLjg0Ni0zNC42MTV2LTE2NS43NjloLTQ4LjkyM0w2MzQuNjE1LTcyNS42OTJxLjYxNS0xNyA0LjczMS00MC43MzEgNC4xMTUtMjMuNzMxIDExLjczLTQ5LjQ5OS0zNy45OTkgOS44NDYtNjguNDk5IDMyLjAzOC0zMC41IDIyLjE5Mi00NS4xMTUgNDkuMjY5SDMwMHEtNjQuMzYzIDAtMTA5LjQ4OSA0NS4xMjZRMTQ1LjM4NS02NDQuMzYyIDE0NS4zODUtNTgwcTAgNDEuMjMxIDIxLjAzOCAxNDEuNjkyIDIxLjAzOSAxMDAuNDYxIDYwLjExNiAyNDMuMzA3IDEuMTU0IDQuMjMxIDQuODA4IDYuOTIzIDMuNjU0IDIuNjkzIDcuODg1IDIuNjkzWk02NDAtNTI0LjYxNnExNC42OTIgMCAyNS4wMzgtMTAuMzQ2VDY3NS4zODQtNTYwcTAtMTQuNjkyLTEwLjM0Ni0yNS4wMzhUNjQwLTU5NS4zODRxLTE0LjY5MiAwLTI1LjAzOCAxMC4zNDZUNjA0LjYxNi01NjBxMCAxNC42OTIgMTAuMzQ2IDI1LjAzOFQ2NDAtNTI0LjYxNlptLTE0Mi42OTItMTAwcTkuNjYzIDAgMTYuMTc4LTYuNTY2UTUyMC02MzcuNzQ5IDUyMC02NDcuNDlxMC05Ljc0LTYuNTE0LTE2LjEyNS02LjUxNS02LjM4NC0xNi4xNzgtNi4zODRIMzQyLjY5MnEtOS42NjMgMC0xNi4xNzggNi41NjZRMzIwLTY1Ni44NjYgMzIwLTY0Ny4xMjVxMCA5Ljc0IDYuNTE0IDE2LjEyNSA2LjUxNSA2LjM4NCAxNi4xNzggNi4zODRoMTU0LjYxNlpNNDgwLTUwMC44NDZaIi8+PC9zdmc+';

    return (
        <>
            <CardBase shadow={true}>
                {({ CardAction }) => (
                    <>
                        <Heading2>
                            <CardAction href="https://design.sparebank1.no">
                                Lenke
                            </CardAction>
                        </Heading2>
                        <Paragraph>Hele kortet er klikkbart</Paragraph>
                    </>
                )}
            </CardBase>
            <CardBase shadow={true}>
                {({ CardAction }) => (
                    <>
                        <Heading2>
                            <CardAction as="button">Knapp</CardAction>
                        </Heading2>
                        <Paragraph>Hele kortet er klikkbart</Paragraph>
                    </>
                )}
            </CardBase>
            <IconCard icon={<Icon fileUrl={savingsIconXlarge} size="xl" />}>
                {({ CardAction, CardName, Title, Subtext, Text }) => (
                    <>
                        <CardName>Kortnavn</CardName>
                        <Title>
                            <CardAction href="https://design.sparebank1.no">
                                Lenke men hele kortet er klikkbart
                            </CardAction>
                        </Title>
                        <Subtext>En liten undertekst</Subtext>
                        <Text>Her kan man ha tekst</Text>
                    </>
                )}
            </IconCard>
        </>
    );
};
